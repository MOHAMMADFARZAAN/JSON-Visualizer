const express = require('express');
const userRouter = require('./routers/userrouter');
const app = express();
const port = 5000;
const cors = require('cors')



// Middlewares----
app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json());
app.use('/user', userRouter);




// Routes or endpoints-----

app.get('/', (req, res) => {
    res.send('response from express');
})

app.post('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});
app.get('/update', (req, res) => {
    res.send('response from update')
})

app.listen(port, () => {
    console.log('server started');
});