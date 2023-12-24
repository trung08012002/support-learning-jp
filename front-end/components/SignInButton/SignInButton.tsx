"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import ButtonCustom from "../navbar/buttonCustom";
import { useRouter } from 'next/navigation'

const SigninButton = () => {
    const { data: session } = useSession();
    const router = useRouter()
    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user?.email}</p>
                <ButtonCustom textColor={"text-white"} backgroundColor={"bg-blue-500"} backgroundColorHover={"bg-blue-700"} icon={undefined} text={"Đăng xuất"}
                    onClick={() => { router.push("/login") }} />
            </div>
        );
    }
    return (
        <ButtonCustom textColor={"text-white"} backgroundColor={"bg-blue-500"} backgroundColorHover={"bg-blue-700"} icon={undefined} text={"Đăng nhập"}
            onClick={() => { router.push("/login") }} />
    );
};

export default SigninButton;