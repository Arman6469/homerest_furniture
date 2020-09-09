const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/sendmail", (req, res) => {
  const productsToMail =
    Object.entries(req.fields).length > 0
      ? req.fields.products.map((product, index) => {
          return `<div style='width: 80% !important, display: flex, flex-direction: column, align-items: center'> <img src=${product.images[0]} width="100%" /> <p>Դուք գնել եք ${product.count} հատ ${product.title}, արժեքը՝ ${product.totalPrice}$</p></div>`;
        })
      : null;
  console.log(productsToMail);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arman.1995.umroyan1@gmail.com",
      pass: "08a358b537",
    },
  });

  let mailOptions = {
    from: "arman.1995.umroyan1@gmail.com",
    to: ["arman.1995.umroyan1@gmail.com", "artakkarapetyan928@gmail.com"],
    subject: "Շնորհակալություն գնումների համար, սիրով HomeRest",
    html: `<div style="display: flex"><p>Պատվիրատուի անունը ։ </p><p> ${
      req.fields.firstname
    }</p></div>
      <div style="display: flex"><p>Ազգանունը ։ </p><p> ${
        req.fields.lastname
      }</p></div>
      <div style="display: flex"><p>Էլեկտրոնային հասցեն ։ </p><p> ${
        req.fields.email
      }</p></div>
      <div style="display: flex"><p>Հեռախոսահամարը ։ </p><p> ${
        req.fields.phone
      }</p></div>
      <div style="display: flex"><p>Հասցեն ։ </p><p> ${
        req.fields.adress
      }</p></div>
        ${productsToMail.join(" ")}
         `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = router;
