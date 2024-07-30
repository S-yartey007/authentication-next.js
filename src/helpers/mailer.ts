import nodemailer from 'nodemailer';
import User from '@/models/userModel';

import bcryptjs from 'bcryptjs';
export const sendEmail = async({email,emailType,userId}:any) => {
    try {
       const hasedToken = await bcryptjs.hash(userId.toString(),10)
        if(emailType === "VERIFY") {
             await User.findByIdAndUpdate
                                (userId,{verifyToken:hasedToken,
                                    verifyTokenExpiry:Date.now() +3600000},
                                {new:true,runValidators: true})

        } else if(emailType === "RESET") {
                 await User.findByIdAndUpdate
                (userId,{forgetPasswordToken:hasedToken,
                forgetPasswordTokenExpiry:Date.now() +3600000},
                {new:true,runValidators: true})

        }
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "a9af19235f5b9f",
              pass: "78d1ab52da792b"
            }
          });

          const mailOptions = {
            from: 'emmanuelyartey163@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hasedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email": "reset your password"}</p>`
          }
          const mailResponse = await transporter.sendMail(mailOptions);
          return mailResponse
    } catch (error:any) {
        throw new Error(error.message)
    }

}