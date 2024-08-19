const mongoose = require('mongoose');

const url = "mongodb+srv://jsonvisualizer:yQgPeqjCKNncfA2J@cluster.4cmflub.mongodb.net/JSONVisualizer?retryWrites=true&w=majority&appName=cluster"


// ascnchronous functions(they run in background no waiting time for a given task)

// Promise object 
mongoose.connect(url)
.then((result) => {
    console.log('database connected!!!!!!!');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;