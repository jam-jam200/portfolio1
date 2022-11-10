import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import { createTransport } from "nodemailer";

//! server used to  send emails
const app = express();
app.use(cors());
app.use(json());
app.use("https://jessicaportfoliotest.netlify.app/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = createTransport({
  service: "gmail",
  auth: {
    user: "fruitfuljessica@gmail.com",
    pass: "jsoqtkqlyxxglipr",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "fruitfuljessica@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
