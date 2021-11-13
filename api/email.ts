import { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.exmail.qq.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'hi@knowto.app',
    pass: process.env.KNOWTO_EXMAIL_SECRET,
  },
})

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const {
    headers: { authorization },
  } = req

  if (authorization !== process.env.EMAIL_TOKEN) {
    return res.status(300).send('invalid token')
  }

  try {
    const mail: Email = req.body
    // @ts-ignore
    const msg = await transporter.sendMail(mail)
    return res.status(200).send(msg)
  } catch (error) {
    return res.status(400).json({
      error: 'invalid body format, should be JSON formatted email',
      msg: error,
    })
  }
}

type Email = {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

/*
Email Object Example
{
  from: '"Fred Foo 👻" <hi@gnimoay.com>', // sender address
  to: 'xxx@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
}
**/
