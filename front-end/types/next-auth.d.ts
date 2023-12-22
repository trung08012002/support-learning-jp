import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface Session{
        user:{
            email:string;
            userName:string;
            address:string;
            phoneNumber:string;
            dateOfBirth:string;
            role:string,
            accessToken:string,
            refreshToken:string
        }
    }
}