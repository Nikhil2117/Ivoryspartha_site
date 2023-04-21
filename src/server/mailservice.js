// const nodemailer = require('nodemailer');

// // Define the object to be sent
// const objectToSend = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   message: 'Hello, world!'
// };

// // Create a Nodemailer transport object with your email service provider's credentials
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'chnikhil62@gmail.com',
//     pass: 'hvnckradcjstrjxs'
//   }
// });

// // Define the email options, including the recipient's email address and the object to be sent
// const mailOptions = {
//   from: 'chnikhil62@gmail.com',
//   to: 'chnikhil62@gmail.com',
//   subject: 'Example email with object contents',
//   text: `${objectToSend}`
// };

// // Send the email using the transporter and mailOptions objects
// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
