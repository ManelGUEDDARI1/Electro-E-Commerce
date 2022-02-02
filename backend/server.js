const path = require ('path');
const morgan = require ('morgan');
const express = require ('express');
const mongoose = require ('mongoose');
const productRouter = require ('./routes/productRouter.js') ;
const userRouter = require('./routes/userRouter.js');
const dotenv = require ('dotenv');
const orderRouter = require('./routes/orderRouter.js');
const uploadRouter = require('./routes/uploadRouter.js');

dotenv.config();
const app = express();

// use middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://ManelG:12345@cluster0.d6c5c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');



if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}




//setting for transform any information in boby to req.body
app.use(express.urlencoded({ extended: true}));



app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal',(req,res) =>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirnaame = path.resolve();
app.use(express.static(__dirnaame + '/public'));
app.use('/uploads', express.static(path.join(__dirnaame, '/uploads')));

 if(process.env.NODE_ENV ==='production') {
  app.use(express.static(path.join(__dirnaame, '/frontend/build')))

  app.get('*',(req,res) => 
    res.sendFile(path.join(__dirnaame, '/frontend/build/index.html'))
  )
 } 
 else {
   app.get('/', (req, res) => {
     res.send('Server is ready');
   });
 }



// const ____dirnaame = path.resolve();
// app.use('/uploads', express.static(path.join(____dirnaame, '/uploads')));


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});



// app.listen(port,(err)=>{
//     err ? console.log(err): console.log('server is running')
   
// })



app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)

