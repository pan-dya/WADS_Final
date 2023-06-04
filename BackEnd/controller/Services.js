import Services from "../models/ServiceModels.js";


export const getServices = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const address = await Services.findAll({
        where: {
          userId: userId,
        },
        attributes: [
          "gardening",
          "housework",
          "medical_support",
          "mental_support",
          "heavy_lifting",
          "delivery",
          "construction",
          "others",
          "details",
          "userId"
        ],
      });
      res.json(address);
    } catch (error) {
      console.log(error);
    }
  };

export const fillServices = async (req, res) => {
    const { gardening, housework, mental_support, heavy_lifting, delivery, construction, medical_support, others, details, userId } = req.body;
    // const userId = req.params.userId;
    try {
      await Address.create({
        gardening: gardening,
        housework:housework,
        medical_support: medical_support,
        mental_support: mental_support,
        heavy_lifting: heavy_lifting,
        delivery: delivery,
        construction: construction,
        others: others,
        details: details,
        userId: userId,
      });
      res.json({ msg: "Order Details Filled" });
    } catch (error) {
      console.log(error);
    }
  };

