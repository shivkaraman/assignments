const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const adminRouter = Router();
const { signJwt } = require('../utils/jwt.js');

//Models
const { Admin, Course } = require('../db/index');

// Admin Routes
adminRouter.post('/signup', async (req, res) => {
    const { username, password } = req.headers;

    const existingAdmin = await Admin.findOne({ username });
    if (!!existingAdmin) {
        return res
            .status(409)
            .json({ error: 'Admin with this username already exists' });
    }

    const admin = new Admin({
        username,
        password,
    });

    admin
        .save()
        .then(() => {
            return res
                .status(201)
                .json({ message: 'Admin created successfully' });
        })
        .catch((err) => {
            return res.status(500).json({ error: err });
        });
});

adminRouter.post('/signin', async (req, res) => {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res
            .status(400)
            .json({ error: 'Username and Password required' });
    }

    Admin.findOne({ username }).then((user) => {
        if (!user) return res.status(401).json({ error: 'Invalid username' });
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = signJwt(username, password);

        return res.status(201).json({ token });
    });
});

adminRouter.post('/courses', adminMiddleware, (req, res) => {
    const { title, description, price, imageLink } = req.body;

    const course = new Course({
        title,
        description,
        price,
        imageLink,
    });
    course
        .save()
        .then(({ _id }) => {
            return res.status(201).json({
                message: 'Course created successfully',
                courseId: _id,
            });
        })
        .catch((err) => {
            return res.status(500).json({ error: err });
        });
});

adminRouter.get('/courses', adminMiddleware, (req, res) => {
    Course.find()
        .then((courses) => {
            return res.status(200).json(courses);
        })
        .catch((err) => {
            return res.status(500).json({ error: err });
        });
});

module.exports = adminRouter;
