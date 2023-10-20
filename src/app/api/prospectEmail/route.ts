import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ProspectEmail from '../../../../emails/ProspectEmail'
import { json } from 'stream/consumers';
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request:Request){
    const { name, prospectCompaignEmail, toEmail, subject } = await request.json();
    try{
        const emailResponse = await resend.sendEmail({
            from:`${process.env.RESEND_TO_EMAIL}`,
            cc:`${prospectCompaignEmail}`,
            to:`${toEmail}`,
            subject:`${subject}`,
            reply_to:`${prospectCompaignEmail}`,
            react:ProspectEmail({name})
        })
        const { id } = await emailResponse
    
        return NextResponse.json({
            id,
            msg:"Message sent succesfully"
    
        })
    

    }catch(error){
        return NextResponse.json({error})
    }
    
}