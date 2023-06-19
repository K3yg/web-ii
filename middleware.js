import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');
import { verifyToken } from './lib/auth';


export async function middleware(request) {

    const token = request.cookies.get('jwt')?.value;

    if (!token) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }

    try {
        const result = await verifyToken(token);
    } catch (err) {
        console.log(err);
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/song/:path*', '/user/:path*', '/artist/:path*'],
};
