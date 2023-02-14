const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");


app.use(express.static("build"));
app.use(express.json());


app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.js"));
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your.email@example.com", // generated ethereal user
      pass: "your password", // generated ethereal password
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: `${name} <${email}>`,
    to: "recipient.email@example.com",
    subject: "Contact form submission",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});