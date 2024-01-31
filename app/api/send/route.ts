// import { EmailTemplate } from './../../_components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//     try {
//         const emailContent = EmailTemplate({ firstName: 'John' });
//         const reactElement = emailContent as unknown as React.ReactElement;

//         const data = await resend.emails.send({
//             from: 'udanshare@resend.dev',
//             to: ['uditkumawat010@gmail.com'],
//             subject: 'Hello world',
//             react: reactElement,
//         });

//         return Response.json(data);
//     } catch (error) {
//         return Response.json({ error });
//     }
// }


import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
      const response=await req.json();
    try {
        
        const data = await resend.emails.send({
            from: 'udanshare@resend.dev',
            to: ['uditkumawat7@gmail.com'],
            subject: response?.fullName + "Share file with you",
            react: EmailTemplate({ response, file: null }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

