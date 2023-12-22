"use client"
import Image from "next/image";
import { type } from "os";
import React, { ReactElement } from "react"
import ButtonCustom from "./buttonCustom";
import NavigationLink from "./NavigationLink";
import { useRouter } from "next/navigation";
import SigninButton from "../SignInButton/SignInButton";


type ItemBarProp = {
    name: string,
    icon: ReactElement,

    router: string
}

const NavBar = () => {
    const router = useRouter()
    const itemsBar: ItemBarProp[] = [{
        name: "Home",
        icon: <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512
         453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320
          352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 
          121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 
          255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 
          231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" ></path>,

        router: "/home",
    },
    {
        name: "Video",
        icon: <path d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z" ></path>,

        router: "/watch",
    },
    {
        name: "News",
        icon:
            <path d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z" ></path>,

        router: "/news"

    },
    {
        name: "Business AI",
        icon: <path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"></path>,

        router: "/ai"

    }
    ];
    const secondItemsBar = [
        {
            name: 'mode',
            icon: <ButtonCustom textColor={"text-slate-600"} backgroundColor={"bg-gray-100"} backgroundColorHover={"bg-gray-100"} icon={<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-half-stroke" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                <path fill="currentColor" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z" ></path></svg>} text={undefined}
                onClick={() => { }} />,

        },

        {
            name: 'mode',
            icon: <SigninButton />,


        },

    ];
    return (
        <nav className="h-navbarHeight w-full bg-white border-gray-200 dark:bg-gray-900">
            <div className="w-full flex flex-wrap items-center justify-between p-1">

                <button onClick={() => { router.push('/home') }}>
                    <img src={"/images/navbar/logo.jpg"} alt="logo" className="w-[130px] object-cover h-navbarHeight p-2" />
                </button >
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-5">
                        {
                            itemsBar.map((e: ItemBarProp, index) =>
                                <NavigationLink key={index} href={e.router} icon={e.icon} name={e.name} />
                            )
                        }
                    </div>
                    <div className="flex items-center gap-5">
                        {secondItemsBar.map((e) =>
                            e.icon
                        )}
                    </div>

                </div>
            </div>
        </nav>
    )
};

export default NavBar;
