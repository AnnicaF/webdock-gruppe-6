const {Like} = require("../models");

exports.show = async (req, res) => {
    try{
      const likes = await Like.findAll();
      return res.status(200).json(likes);
    } catch (err) {
      console.log(err);
      return res.send("Error");
    }
  };

  exports.create = async (req, res) => {
    const { userId, requestId } = req.body;
      
    const newLike = Like.build({
    requestID: requestId,
    userID: userId,
    })
    
    try {
      newLike.save();
      return res.status(201).send(newLike);
    } catch (err) {
      return res.json(err);
    }
  };
  