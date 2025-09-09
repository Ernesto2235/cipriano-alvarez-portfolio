'use server';
import { cookies } from 'next/headers';
import { User } from './User';
import { SignJWT,jwtVerify } from 'jose';
import { SessionPayload } from './definitions';


const sessionSecret = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(sessionSecret);

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d') // Set expiration time to 7 days
        .sign(encodedKey);
    
}

export async function decrypt(session:string | undefined = ""){
    try{
        const{ payload } = await jwtVerify(session,encodedKey,{
            algorithms: ['HS256'],
        })
        return payload;
    }catch (error) {
        console.error("Failed to verify Session");
    }
}

export async function createSession(userId: string){
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days from now
    const session = await encrypt({userId, expiresAt});
    const cookieStore = cookies();

    (await cookieStore).set("session", session, {
        httpOnly: true,
        secure:true,
        expires: new Date(expiresAt),
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession(){
    const cookieStore = await cookies();
    cookieStore.delete("session")
}