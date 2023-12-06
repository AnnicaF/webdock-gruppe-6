const {Category} = require("../models");

exports.show = async (req, res) => {
    try{
      const categories = await Category.findAll({
        attributes: ["id","name"]
      });
      return res.status(200).json(categories);
    } catch (err) {
      console.log(err);
      return res.send("Error");
    }
  };