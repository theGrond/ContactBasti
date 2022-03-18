const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

const ContactSchema = new mongoose.Schema({
  contactId: Number,
  firstName: String,
  lastName: String,
  mobileNo: String,
  email: String,
  facebook: String,
  imageUrl: String
});

//Model:
const Contacts = mongoose.model("Contacts", ContactSchema);

router.get("/contact/getmany", async function (req, res) {
  const contacts = await Contacts.find();
  res.send(contacts);
});

router.get("/contact/:id", async function (req, res) {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404).send("contact not found");
  }
  res.send(contact);
});

router.post("/contact", async function (req, res) {
  const { contactId, firstName, lastName, mobileNo, email, facebook, imageUrl } = req.body

  let contact = new Contacts({
    contactId: contactId,
    firstName: firstName,
    lastName: lastName,
    mobileNo: mobileNo,
    email: email,
    facebook: facebook,
    imageUrl: imageUrl
  });
  contact = await contact.save();

  res.send(contact);
});

router.put("/contact/:id", async function (req, res) {
  const { contactId, firstName, lastName, mobileNo, email, facebook, imageUrl } = req.body
  const contact = await Contacts.findByIdAndUpdate(
    req.params.id,
    {
      contactId: contactId,
      firstName: firstName,
      lastName: lastName,
      mobileNo: mobileNo,
      email: email,
      facebook: facebook,
      imageUrl: imageUrl
    },
    { new: true }
  );

  if (!contact) {
    res.status(404).send("contact not found");
  }

  res.send(contact);
});

router.delete("/contact/:id", async function (req, res) {
  const contact = await Contacts.findByIdAndRemove(req.params.id);
  if (!contact) {
    res.status(404).send("contact not found");
  }

  res.send(contact);
});

router.get("/contact/search/:searchTerm", async function (req, res) {
  let regex = new RegExp(req.params.searchTerm, 'i');
  const contact = await Contacts.find({ $or: [{ firstName: regex }, { lastName: regex }] });

  if (!contact) {
    res.status(404).send("contact not found");
  }

  res.send(contact);
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
//Model:
const Users = mongoose.model("Users", UserSchema);
try {
  let user = Users.findOne({ username: 'bob', password: '1234' }).exec((err, user) => {
    console.log("user", user);
    console.log("error", err);
    if (!err && !user) {

      let user = new Users({ username: 'bob', password: '1234' });
      user.save();

    }
    else {
      console.log(err);
    }

  });;



}
catch (ex) {

}

router.post("/user/login", async function (req, res) {
  const { username, password } = req.body;
  const user = await Users.findOne({ username: username, password: password });
  if (user) {
    res.send(200);
    return
  }
  else {
    res.send(404);
    return
  }
});

module.exports = router;

