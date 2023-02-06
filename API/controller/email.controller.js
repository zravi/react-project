//third party email api
import nodemailer from 'nodemailer';

var sendMail = (email,password)=>{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user: 'user@gmail.com',
     pass: 'vtzkfcocejfxqgvv'
  }
});

var mailOptions = {
  from: 'user@gmail.com',
  to: email,
  subject: "Verification Mail ",
  html: "<h1>Welcome</h1><p>you have successfully register to our site , your login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h1>Click on the link below to verify your account</h1> http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default sendMail;