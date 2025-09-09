"use server"

import {NextRequest, NextResponse} from "next/server";
import { cookies } from "next/headers";
import {decrypt} from "@/app/lib/session";


export async function middleware(req: NextRequest) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);




    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if(session?.userId ===undefined){
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    if(req.nextUrl.pathname.startsWith('/login')) {
        if(session?.userId !== undefined){
            return NextResponse.redirect(new URL('/', req.url));
        }
    return NextResponse.next();
}}