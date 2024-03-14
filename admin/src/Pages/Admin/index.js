const express =  require('express');
const Users = require('../../../../backend/index');
const getAllUsers = async (req,res) =>{
    try{
        const users = await Users.find();
        console.log(users);
        if(!users || users.length === 0){
            return  res.status(404).json({message: "No Users Found"});
        }
        return res.status(200).json(users);
    }catch(error){
        next(error);
    }
}
app.get('/users',getAllUsers);