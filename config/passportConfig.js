const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            Employee.findOne({ email: username },
                (err, employee) => {
                    if (err)
                        return done(err);
                    else if (!employee)
                        return done(null, false, { message: 'Email is not registered' });
                    else if (!employee.verifyPassword(password))
                        return done(null, false, { message: ' password is wrong.' });
                    else
                        return done(null, employee);
                });
        })
);