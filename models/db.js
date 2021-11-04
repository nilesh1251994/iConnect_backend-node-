const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection successfully.'); }
    else { console.log(' MongoDB connection failed : ' + JSON.stringify(err, undefined, 2)); }
});

require('./iConnect.model');