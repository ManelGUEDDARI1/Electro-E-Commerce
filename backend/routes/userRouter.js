const express = require ('express');
const User = require ('../models/userModel');
const data = require ('../data');
const expressAsyncHandler = require ('express-async-handler');
const bcrypt = require ('bcryptjs');
const  {generateToken, isAuth, isAdmin} = require ('../utils');

const userRouter= express.Router();

userRouter.get ('/seed', 
   expressAsyncHandler(async (req,res) => {
       // remove all older users
   //await User.remove({}) ;
    const createUsers = await User.insertMany(data.users);
    res.send ({createUsers});
}))

userRouter.post('/signin', expressAsyncHandler(async(req,res)=> {
    const user = await User.findOne({email: req.body.email});
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send ({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,  
                token: generateToken (user),
            });
            return;
        }
    }
    res.status(401).send({message : 'Invalid Email or password'})
}));


userRouter.post ('/register', expressAsyncHandler(async(req,res)=> {
    const user = new User ({
        name: req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send ({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    })
}));

userRouter.get('/:id', expressAsyncHandler(async(req,res)=> {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found'})
    }
}))

userRouter.put('/profile', isAuth, expressAsyncHandler(async(req,res)=> {
    //get the user from database
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
   
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password,8);
        }
        const updatedUser= await user.save();
        //after saving user it's time to send user information to frontend
        res.send ({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),  
        })

    }
}))

userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        if (user.email === 'manel.gueddari@gmail.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User' });
          return;
        }
        const deleteUser = await user.remove();
        res.send({ message: 'User Deleted', user: deleteUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );
  
  userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;
        const updatedUser = await user.save();
        res.send({ message: 'User Updated', user: updatedUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

module.exports=userRouter;