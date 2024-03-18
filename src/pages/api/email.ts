// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    name: "digitalinindia.com",
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    to: "lead@digitalinindia.in",
    subject: "Hello ✔",
    html: "<b>Hello world?</b>",
  };
  await transporter.sendMail(mailOptions, (err,info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error" });
    }
    else {
      console.log(info);
      return res.status(200).json({ message: "Email sent" });
    }
    
  });

  res.status(200).json({ message: "John Doe" });
}
