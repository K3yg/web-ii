import { NextResponse } from 'next/server';
import cookie from 'cookie';
import { SignJWT } from 'jose';
import { limiter } from '../config/limiter';

const User = require('@/models/User');

const secret_key = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
);

export async function POST(req) {
    const remaingRequests = await limiter.removeTokens(1);
    console.log(`remaingRequests: ${remaingRequests}`)

    if (remaingRequests < 0) {
        return NextResponse.json({ message: 'Too many requests', status: 429  });
    }


    const {email, password} = await req.json();

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials', status: 401  });
    }
    
    const isPasswordValid = await user.validPassword(password);
    if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid credentials', status: 401  });
    }
    
    const token = await new SignJWT({})
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('2h')
        .sign(secret_key);


    const jwtCookie = cookie.serialize('jwt', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // Cookie expiration time (e.g., 1 day)
        path: '/',
    });

    // Return the response with the JWT cookie set
    return NextResponse.json({ message: 'OK', status: 200 }, { headers: { 'Set-Cookie': jwtCookie } });;


}