var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const axios = require("axios");
/* GET users listing. */
router.post("/", function(req, res, next) {
  console.log(req.body.userObj.email)
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "jungraejang@pursuit.org",
        pass: "wjdfo0124"
      }
    })
  );

  const mailOptions = {
    from: "jungraejang@pursuit.org",
    to: req.body.userObj.email,
    subject: "Welcome to Dropin",
    text: "Thank you for Signing Up!"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info.response);
    }
  });
  // })
});

module.exports = router;
