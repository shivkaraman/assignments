const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const adminRouter = Router();

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
