import { NowRequest, NowResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

export default async (request: NowRequest, response: NowResponse) => {
  const { name, email, phoneNumber, subject, message } = request.body;

  const msg = {
    to: process.env.CONTACT_MAIL_TO,
    from: process.env.CONTACT_MAIL_FROM,
    subject: `[SITE]: ${subject}`,
    text: `${message}`,
    html: `<h3>Conteúdo da mensagem:</h3><p>${message}</p><br/><br/>Nome: ${name}<br/>Email: ${email}<br/>Telefone: ${phoneNumber}<br/><br/><p>Esta mensagem foi enviado através do formulário no website.</p>`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(msg);
    response.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    response.status(400).send("Message not sent.");
  }
};
