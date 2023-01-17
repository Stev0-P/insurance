import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";
import nodemailer from "nodemailer";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/hello", (req, res) => {
  res.send("hello!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/formAPI", async (req, res, next) => {
  const {
    regNumber,
    carPurchaseDate,
    title,
    fullName,
    dob,
    postCode,
    fullAddress,
    email,
    number,
    whenLicense,
    accidentClaims,
    penaltyPoints,
    policyStartDate,
    noClaimsBonus,
    prevInsurancePrice,
    fullNameAdd,
    dobAdd,
    whenLicenseAdd,
    accidentClaimsAdd,
    penaltyPointsAdd,
    noClaimsBonusAdd,
    blackbox,
  } = req.body;

  console.log(regNumber, carPurchaseDate, title);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "m9insurance@outlook.com", // generated ethereal user
      pass: "March2022!", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "m9insurance@outlook.com", // sender address
    to: "m9insurance@outlook.com", // list of receivers
    subject: `${fullName} Quote`, // Subject line

    html: `<div>
    <div>
     <h1>Details  for ${fullName} </h1>
  </div>
  <div>
     <b>Reg. Number: ${regNumber} </b>
  </div>
  <div>
     <b>Car Purchase Date: ${carPurchaseDate} </b>
  </div>
  <div>
     <b>Title: ${title} </b>
  </div>
  <div>
     <b>Full Name: ${fullName} </b>
  </div>
  <div>
     <b>Date of Birth: ${dob} </b>
  </div>
  <div>
     <b>Post Code: ${postCode} </b>
  </div>
  <div>
     <b>Full Address: ${fullAddress} </b>
  </div>
  <div>
     <b>Email: ${email} </b>
  </div>
  <div>
     <b>Tel. Number: ${number} </b>
  </div>
  <div>
     <b>License Start Date: ${whenLicense} </b>
  </div>
  <div>
     <b>Accident Claims: ${accidentClaims} </b>
  </div>
  <div>
     <b>Penalty Points: ${penaltyPoints} </b>
  </div>
  <div>
     <b>Policy Start Date : ${policyStartDate} </b>
  </div>
  <div>
     <b>No Claims Bonus: ${noClaimsBonus} </b>
  </div>
  <div>
     <b>Previous Insurance Price: ${prevInsurancePrice} </b>
  </div>
  <div>
     <b>Additional Driver Full Name: ${fullNameAdd} </b>
  </div>
  <div>
     <b>Additional Driver Date of Birth: ${dobAdd} </b>
  </div>
  <div>
     <b>Additional Driver License Start Date: ${whenLicenseAdd} </b>
  </div>
  <div>
     <b>Additional Driver Accident Claims: ${accidentClaimsAdd}: </b>
  </div>
  <div>
     <b>Additional Driver Penalty Points: ${penaltyPointsAdd}: </b>
  </div>
  <div>
     <b>Additional Driver No Claims Bonus: ${noClaimsBonusAdd}: </b>
  </div>
  <div>
    <b>Black Box: ${blackbox}: </b>
  </div>
  
  </div> `,

    // html: `<b>Details  for ${fullName}: </b>``<b>Reg. Number: ${regNumber}: </b>``<b>Car Purchase Date: ${carPurchaseDate}: </b>``<b>Title: ${title}: </b>``<b>Full Name: ${fullName}: </b>``<b>Date of Birth: ${dob}: </b>``<b>Post Code: ${postCode}: </b>``<b>Full Address: ${fullAddress}: </b>``<b>Email: ${email}: </b>``<b>Tel. Number: ${number}: </b>``<b>License Start Date: ${whenLicense}: </b>``<b>Accident Claims: ${accidentClaims}: </b>``<b>Penalty Points: ${penaltyPoints}: </b>``<b>Policy Start Date : ${policyStartDate}: </b>``<b>No Claims Bonus: ${noClaimsBonus}: </b>``<b>Previous Insurance Price: ${prevInsurancePrice}: </b>``<b>Additional Driver Full Name: ${fullNameAdd}: </b>``<b>Additional Driver Date of Birth: ${dobAdd}: </b>``<b>Additional Driver License Start Date: ${whenLicenseAdd}: </b>``<b>Additional Driver Accident Claims: ${accidentClaimsAdd}: </b>``<b>Additional Driver Penalty Points: ${penaltyPointsAdd}: </b>``<b>Additional Driver No Claims Bonus: ${noClaimsBonusAdd}: </b>``<b>Black Box: ${blackbox}: </b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  //main().catch(console.error);

  res.send("form!!");
});

export default app;
