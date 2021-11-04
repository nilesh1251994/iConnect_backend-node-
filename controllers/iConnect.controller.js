const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Employee = mongoose.model('Employee');

module.exports.register = (req, res, next) => {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, employee, info) => {       
        if (err) return res.status(400).json(err);
        else if (employee) return res.status(200).json({ "token": employee.generateJwt() });
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.employeeProfile = (req, res, next) =>{
    employee.findOne({ _id: req._id },
        (err, employee) => {
            if (!employee)
                return res.status(404).json({ status: false, message: 'Employee data not found.' });
            else
                return res.status(200).json({ status: true, employee : _.pick(employee,['fullName','email']) });
        }
    );
}