import Address from "../models/AddressModel.js";


export const getAddress = async (req, res) => {
  const userId = req.params.userId;

  try {
    const address = await Address.findOne({
      where: {
        userId: userId,
      },
      attributes: [
        "province",
        "city",
        "regency",
        "details",
        "postal_code",
      ],
    });
    res.json(address);
  } catch (error) {
    console.log(error);
  }
};

export const add_Address = async (req, res) => {
  const { province, city, regency, details, postal_code, userId } = req.body;
  // const userId = req.params.userId;
  try {
    await Address.create({
      province: province,
      city: city,
      regency: regency,
      details: details,
      postal_code: postal_code,
      userId: userId,
    });
    res.json({ msg: "Address Successfully Added" });
  } catch (error) {
    console.log(error);
  }
};

export const updateAddress = async (req, res) => {
  const { province, city, regency, details, postal_code } = req.body;
  const { userId } = req.params;

  try {
    const address = await Address.findOne({
      where: { userId: userId },
    });
    if (!address) {
      return res.status(404).json({ msg: "Address not found" });
    }

    address.province = province;
    address.city = city;
    address.regency = regency;
    address.details = details;
    address.postal_code = postal_code;

    await address.save();+

    res.json({ msg: "Address successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Please Fill The Form Correctly!" });
  }
};
