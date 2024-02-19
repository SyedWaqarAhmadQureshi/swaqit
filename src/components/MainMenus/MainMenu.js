import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
    {
        id: 1,
        linkText: 'Home',
        link:'/'
    },
    {
        id: 3,
        linkText: 'Services',
        link: '/service',
        
    },
    {
        id: 7,
        linkText: 'Our Clients',
        link: '/our-client',
        
    },
    {
        id: 2,
        linkText: 'About Us',
        link: '/about'
    },
    {
        id: 4,
        linkText: 'CEO Message',
        link:'/message'
    },
    {
        id: 5,
        linkText: 'Contact',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 15,
                link: '/',
                linkText: 'info@swaqit.com'
            },
            {
                id: 16,
                link: '/',
                linkText: '+1 (646) 568-6003'
            },
            {
                id: 17,
                link: '/',
                linkText: '+91 194 4079733'
            },
        ]
    },
    // {
    //     id: 6,
    //     linkText: 'Contact',
    //     link: '/contact'
    // },
];

const MainMenu = () => {
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(0);
    const handleShowHideOnMobileMenu = (id) => {
        if (showMobileSubmenu === 0) {
            setShowMobileSubmenu(id);
        } else {
            setShowMobileSubmenu(0);
        }

    }

    return (
        <ul className="navbar-nav">

            {menus.length > 0 ? menus.map((item, i) => (
                <li key={i}
                    onClick={() => handleShowHideOnMobileMenu(item?.id)}
                    className={`${item.child ? 'dropdown' : ''} nav-item`}>
                    {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                        className="menu-dropdown nav-link text-white"
                        data-toggle="dropdown">{item.linkText}
                    </NavLink>
                        : <NavLink to={item.link} className="nav-link text-white"
                            data-toggle="dropdown" aria-expanded="true">{item.linkText}

                        </NavLink>}

                    {item.child ?
                        <ul className={`dropdown-menu ${showMobileSubmenu === item?.id ? 'show' : ''}`} role="menu">
                            {item.submenu.map((sub_item, i) => (
                                <li key={i}>
                                    {sub_item.child ?
                                        <NavLink onClick={e => e.preventDefault()}
                                            to="/">{sub_item.linkText}</NavLink>
                                        : <NavLink
                                            to={sub_item.link} className="dropdown-item" >{sub_item.linkText}</NavLink>}

                                </li>
                            ))}
                        </ul>
                        : null
                    }
                </li>
            )) : null}
        </ul>
    );
};

export default MainMenu;