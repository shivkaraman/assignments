const { Router } = require('express');
const userRouter = Router();
const userMiddleware = require('../middleware/user');
const { signJwt, decodeJwt } = require('../utils/jwt');

//Models
const { User, Course } = require('../db/index');

// User Routes
userRouter.post('/signup', async (req, res) => {
    const { username, password } = req.headers;

    const existingUser = await User.findOne({ username });
    if (!!existingUser) {
        return res.status(409).json({ error: 'Username already exists' });
    }

    const user = new User({
        username,
        password,
    });

    user.save()
        .then(() => {
            return res
                .status(201)
                .json({ message: 'User created successfully' });
        })
        .catch((err) => {
            return res.status(500).json({ error: err });
        });
});

userRouter.post('/signin', async (req, res) => {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res
            .status(400)
            .json({ error: 'Username and Password required' });
    }

    User.findOne({ username }).then((user) => {
        if (!user) return res.status(401).json({ error: 'Invalid username' });
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = signJwt(username, password);

        return res.status(201).json({ token });
    });
});

userRouter.get('/courses', (req, res) => {
    Course.find()
        .then((courses) => {
            return res.status(200).json(courses);
        })
        .catch((err) => {
            return res.status(500).json({ error: err });
        });
});

userRouter.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { username } = decodeJwt(req.headers.token);
    const courseId = req.params.courseId;

    try {
        const course = await Course.findOne({ _id: courseId }); // Use findOne instead of find and correct the field name
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $addToSet: { purchasedCourses: course._id } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res
            .status(200)
            .json({ message: 'Course purchased successfully' });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
});

userRouter.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const { username } = decodeJwt(req.headers.token);
    const user = await User.findOne({ username });

    const courses = await Course.find({ _id: { $in: user?.purchasedCourses } });
    return res.status(200).json({
        purchasedCourses: courses,
    });
});

module.exports = userRouter;

module.exports = router