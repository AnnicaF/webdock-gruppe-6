const express = require("express");
const router = express.Router();
const User = require("./models");

router.get("/v1/user", async(req, res) => {
    const users = await User.findAll();

    res.status(200).json(users);
});

router.post("/v1/user", async(req, res) => {
    const {name, email} = req.body;

    const newUser = User.build({
        "name": name,
        "email": email
    });

    try{
        await newUser.save();
        
        res.status(201).json(newUser);
    }
    catch(err){
        res.json(err);
    }
    
});

router.get("/v1/user/:id", async(req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(user);
});

router.patch("/v1/user/:id", async(req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    const {email} = req.body;

    await user.set({
        email:email
    })
    await user.save();
    res.status(200).json(user);
});

router.put("/v1/user/:id", async(req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    const {email,name} = req.body;

    await user.set({
        email:email,
        name:name
    })
    await user.save();
    res.status(200).json(user);
});

module.exports = router;