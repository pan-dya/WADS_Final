import Services from "../models/ServiceModels.js";


export const getServices = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const address = await Services.findOne({
        where: {
          userId: userId,
        },
        attributes: [
          "id",
          "typeOfService",
          "details",
          "updatedAt",
          "userId"
        ],
      });
      res.json(address);
    } catch (error) {
      console.log(error);
    }
  };

export const fillServices = async (req, res) => {
    const { typeOfService, details, userId } = req.body;
    // const userId = req.params.userId;
    try {
      await Services.create({
        typeOfService: typeOfService,
        details: details,
        userId: userId,
      });
      res.json({ msg: "Order Details Filled" });
    } catch (error) {
      console.log(error);
    }
  };

