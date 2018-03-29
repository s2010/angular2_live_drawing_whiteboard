const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb://drawing_admin:roott@ds127129.mlab.com:27129/drawing', err => {
  // Stop the process if there is connection errror
  process.nextTick(() => {
    if (err) throw err;
  });
});

// Models
var User = mongoose.model('User', {
  username: String,
  password: String,
});

module.exports = {
  User,
};
