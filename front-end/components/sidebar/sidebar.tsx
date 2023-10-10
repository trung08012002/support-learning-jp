import React from "react"
import NavigationLink from "../navbar/NavigationLink";
import SideBarItem from "./sidebarItem";

type menuItemProps = {
    icon: any,
    title: string,
    name: string,
}

type SideBarItemProps = {
    header: string,
    menuItems: menuItemProps[]
}

const SideBar = () => {

    const sideBarItems = [
        {
            header: "Ghi nhớ",
            menuItems: [
                {
                    icon: <span>あ</span>,
                    title: "Bảng chữ cái"
                },
                {
                    icon: <span>漢</span>,
                    title: "Hán tự"
                },
                {
                    icon: <span>語</span>,
                    title: "Từ vựng"
                },
                {
                    icon: <span>文</span>,
                    title: "Ngữ pháp"
                }
            ]
        },
        {
            header: "Thực hành",
            menuItems: [
                {
                    name: "star",
                    icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512" className="svg-inline--fa fa-star h-6 w-6 "><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" ></path></svg>,
                    title: "Đã gán sao"
                },
                {
                    name: "square-check",
                    icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-check" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-square-check h-6 w-6 "><path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" ></path></svg>,
                    title: "Trắc nghiệm"
                },
                {
                    name: "youtube",
                    icon: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube h-6 w-6 "><path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"></path></svg>,
                    title: "Watch"
                },
                {
                    name: "newspaper",
                    icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-newspaper h-6 w-6 "><path fill="currentColor" d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"></path></svg>,
                    title: "Tin tức"
                }
            ]
        },
        {
            header: "Công cụ",
            menuItems: [
                {
                    icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user-tie h-6 w-6 "><path fill="currentColor" d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z" ></path></svg>,
                    title: "Business AI"
                },

            ]
        }
    ];
    return (
        <aside className="h-full">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm space-y-4 overflow-y-auto" >
                {sideBarItems.map((sideBarItem, index) => <>
                    <h6 className="px-3 mb-2 pt-md-4" key={index}>{sideBarItem.header}</h6>
                    {
                        sideBarItem.menuItems.map((menuItem, index) => <SideBarItem key={index} Icon={menuItem.icon} title={menuItem.title} />)
                    }
                </>)}
            </nav>
        </aside>
    )
};

export default SideBar;
