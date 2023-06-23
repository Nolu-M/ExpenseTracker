import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: "Dashboard",
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
        title: "Expenses",
        path: '/expenses',
        icons: <GiIcons.GiExpense />,
        cName: 'nav-text',
    },
    {
        title: "Analytics",
        path: '/analytics',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    
    

]


export default SidebarData
