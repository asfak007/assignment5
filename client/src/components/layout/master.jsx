import React from 'react';
import { Helmet } from "react-helmet";
import {  Text, Img, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import {Link} from "react-router-dom";

const Master = (props) => {

    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <div>
            <Helmet>
                <title>All Foods - Explore Our Full Menu</title>
                <meta
                    name="description"
                    content="Browse our complete list of delicious foods including crispy fried chicken, fresh salads, and more. Edit or delete items to keep your menu up-to-date."
                />
            </Helmet>

            {/* main container section */}
            <div className="flex w-full items-start  gap-10 bg-white-A700 pr-[70px] md:flex-col md:pr-5">
                {/* sidebar navigation section */}
                <Sidebar
                    width="242px !important"
                    collapsedWidth="80px !important"
                    collapsed={collapsed}
                    className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-100 p-5 md:hidden"
                >
                    {/* logo and name section */}
                    <div className="flex flex-wrap items-start gap-2 ml-5 md:ml-0">
                        <Heading
                            as="p"
                            className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-indigo-400 text-center !text-white-A700"
                        >
                            G
                        </Heading>
                        <Heading as="p" className="tracking-[0.50px]">
                            CRUD Food
                        </Heading>
                    </div>

                    {/* menu label section */}
                    <Text size="xs" as="p" className="ml-5 mt-14 tracking-[1.00px] !text-gray-900_7f md:ml-0">
                        MENU
                    </Text>

                    {/* sidebar menu section */}
                    <Menu
                        menuItemStyles={{
                            button: {
                                padding: "12px 12px 12px 20px",
                                gap: "12px",
                                color: "#273240",
                                fontWeight: 400,
                                fontSize: "12px",
                                borderRadius: "5px",
                                [`&:hover, &.ps-active`]: { color: "#5a67ba", backgroundColor: "#707fdd19 !important" },
                            },
                        }}
                        className="mb-[521px] mt-[9px] flex w-full flex-col self-stretch"
                    >
                        {/* cart menu item section */}
                        <Link to='/createFood'>
                            <MenuItem icon={<Img src="images/img_cart.svg" alt="cart_one" className="h-[18px] w-[18px]" />}>
                            Create Food
                        </MenuItem>
                        </Link>
                        {/* order menu item section */}
                        <Link to='/'>
                            <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone_one" className="h-[18px] w-[18px]" />}>
                            All Foods
                        </MenuItem>
                        </Link>
                    </Menu>
                </Sidebar>

                {/* content section */}
                {props.children}

            </div>
        </div>
    );
};

export default Master;