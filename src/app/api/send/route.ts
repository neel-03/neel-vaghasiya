import { NextRequest, NextResponse } from "next/server";
import emailjs from '@emailjs/browser'

export async function POST(req: NextRequest) {
    const body = await req.json()
    
    const mailObject = {
        to_name: process.env.MAIL_TO,
        from_name: body.firstName + ' ' + body.lastName,
        from_mail: body.mailFrom,
        subject: body.mailSubject,
        message: body.mailBody
    }
    
    emailjs.send(
        process.env.SERVICE_ID ?? "",
        process.env.TEMPLATE_ID ?? "",
        mailObject,
        process.env.PUBLIC_KEY
    ).then((res) => {
        console.log('from res: ', res)
    }, (err) => {
        console.log('from err: ', err)
    })

    return NextResponse.json({skip: true}, {status: 404})
}