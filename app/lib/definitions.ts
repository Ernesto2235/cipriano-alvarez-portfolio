import { JWTPayload } from "jose";

 export interface SessionPayload extends JWTPayload{
    userId: string; // JSON string of User object
    expiresAt: string; // Expiration date of the session
}