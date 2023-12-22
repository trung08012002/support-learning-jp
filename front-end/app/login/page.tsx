
"use client"
import React, { useEffect } from "react"


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "types/auth";

import Input from "@/components/Input/Input";


import Button from "@/components/Button/Button";
import { getSession, signIn } from "next-auth/react";


const loginSchema = schema.pick(["email", "password"])
type LoginSchema = Pick<Schema, 'email' | 'password'>;
const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>(
        {
            resolver: yupResolver(loginSchema)
        }
    );
    const session = getSession();
    useEffect(() => {

    }, [session])
    const onSubmit = handleSubmit(async (data) => {

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "http://localhost:3000/home"
        })
    })

    return (
        <div className="bg-sky-100 min-h-screen">
            <div className="max-w-7xl mx-auto-px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg-py-32 lg:pr-10">
                    <div className="lg:col-start-4 col-span-2">
                        <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit} noValidate>
                            <div className="text-2xl">Đăng nhập</div>
                            <Input className="mt-8" name={"email"} register={register} type={"email"} placeholder="Email" errorMessage={errors.email?.message} />
                            <Input className="mt-2 relative" name={"password"} register={register} type={"password"} placeholder="password" errorMessage={errors.password?.message} />

                            <div className="mt-2">
                                <Button type="submit" isLoading={false}
                                    disabled={false}
                                    className="w-full text-center py-4 px-2 uppercase
                bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center">
                                    Đăng nhập</Button>
                            </div>
                            <div className='flex items-center justify-center mt-10'>
                                <span className="text-gray-400">Bạn chưa có tài khoản ? </span>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
