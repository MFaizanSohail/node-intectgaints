const express = require('express')
const adminRouter = express.Router();

adminRouter.get('/posts', function (req, res) {
    res.send("View user posts");
});

adminRouter.post('/users', function (req, res) {
    res.send("Create new user");
});

adminRouter.put('/users/:id', function (req, res) {
    res.send("Update user");
});

adminRouter.delete('/users/:id', function (req, res) {
    res.send("Delete user");
});

module.exports = adminRouter;
