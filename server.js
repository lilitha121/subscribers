const express = require('express');
const app = express();
const mongoose = require('mongoose')
const subscribersRouter = require("./router/subscribers");
// const Subscriber = require('./models/subscriber')
// app.use("/subscribers", subscribersRouter);
 app.use(express.json());

mongoose.connect(
  "mongodb+srv://lilitha121:Ngelelily18@subscribers.4cjhl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connnected to database'))

// const subscribersRouter = require('./routes/subscibers')
app.use('/subscribers', subscribersRouter)
// localhost: 3000/subscribers

app.set('port', process.env.port || 3000) 

app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})

app.listen(3000, () => {
    console.info(`Server listen on port ${app.get('port')}`);
})