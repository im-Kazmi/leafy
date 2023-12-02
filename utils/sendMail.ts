import nodemailer from "nodemailer";

const MAIL = process.env.MAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL,
    pass: PASSWORD,
  },
});

export const sendMail = async ({ to, subject, html }: any) => {
  try {
    await transporter.sendMail({
      to: to,
      from: MAIL,
      subject,
      html,
    });
    console.log("MAILS SENT SUCCESSFULLY");
  } catch (error) {
    console.log(error);
  }
};
