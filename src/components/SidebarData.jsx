import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: "Budget",
        path: '/budget',
        icons: <GiIcons.GiMoneyStack />,
        cName: 'nav-text',
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {
        title: "Services",
        path: '/services',
        icons: <GrIcons.GrServices />,
        cName: 'nav-text',
    },
    

]


export default SidebarData
