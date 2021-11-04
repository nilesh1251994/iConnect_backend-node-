const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can not be empty'
    },
    email: {
        type: String,
        required: 'Email Can not be empty'
    },
    password: {
        type: String,
        required: 'Password can not be empty'
    },
    saltSecret: String
});


employeeSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

employeeSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('Employee', employeeSchema);