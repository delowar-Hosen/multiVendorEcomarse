const storeModel = require("../models/storeModel");
const User = require("../models/user");

exports.becomeMerchant = async (req, res) => {
  const { storeName, owner, officeMail, officePhone, officeAddress, products } =
    req.body;

  let check = await storeModel.find({ storeName: storeName });

  if (check.length > 0) {
    res.json({ error: "This name is not availble,Please try another" });
  } else {
    const store = new storeModel({
      storeName,
      owner,
      officeMail,
      officePhone,
      officeAddress,
      products,
    });
    store.save();
    res.send(store);
  }
};

exports.merchantStatus = async (req, res) => {
  const { storeName, email, ownerId, status } = req.body;

  let check = await storeModel.find({
    storeName: storeName,
  });

  if (check.length > 0) {
    if (status == "Approved") {
      await storeModel.findOneAndUpdate(
        { storeName: storeName },
        { status: "Approved" },
        { new: true }
      );
    } else if (status == "Rejected") {
      await storeModel.findOneAndUpdate(
        { storeName: storeName },
        { status: "Approved" },
        { new: true }
      );
    }
    await User.findOneAndUpdate(
      { _id: ownerId },
      { role: "Merchant", merchant: true },
      { new: true }
    );
  } else {
    return res.json({ error: "This store name has not exists" });
  }

  res.json({ error: "Update is successfully" });
};

exports.getStore = async (req, res) => {
  try {
    const data = await storeModel.find({});
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};