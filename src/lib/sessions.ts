import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET_KEY ?? "",
    cookieName: process.env.SESSION_COOKIE_NAME ?? "",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true
    }
}