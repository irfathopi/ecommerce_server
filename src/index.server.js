const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//routes
const userRoutes = require('./routes/user');


//environment variable or you can say contants
env.config();


//mongodb connection
//mongodb+srv://ecommerceadmin:<password>@cluster0.wcqxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wcqxu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
    }
).then(() =>{
    console.log('Database Connected');
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes);




app.listen(process.env.PORT, () =>{
    console.log(`server is running on port ${process.env.PORT}`);
})