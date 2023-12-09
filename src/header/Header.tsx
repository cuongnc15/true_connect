import { NavLink } from "react-router-dom"
import logo from "../assets/header/2022.08 1.png"
import logoMobile from "../assets/header/2022.08 1m.png"
import menu from "../assets/header/IconButton.png"
import search from "../assets/header/IconButton2.png"
import styles from './header.module.css'
import { useState } from "react"
import HeaderMobile from "./HeaderMobile"

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const showMenuHandler = () => {
        setShowMenu(true);
    };
    const hideMenuHandler = () => {
        setShowMenu(false);
    };

    return(
        <>
        <div className={styles.nav}>
            <NavLink className={styles.logo} to="/"><img src={logo} alt="Logo True Connect" /></NavLink>
            <NavLink className={styles.logoMobile} to="/"><img src={logoMobile} alt="Logo True Connect" /></NavLink>
            <div className={styles.headItem}>
                <div className={styles.menu}><img src={menu} alt="menu" 
                    onClick={showMenuHandler}/>
                </div>
                <div className={styles.navSearch}><img src={search} alt="search" /></div>
            </div>
            <NavLink className={styles.menuText} to="/">Trang chủ</NavLink>
            <NavLink className={styles.menuText} to="/about">Về chúng tôi</NavLink>
            <NavLink className={styles.menuText} to="/product">Sản phẩm và dịch vụ</NavLink>
            <NavLink className={styles.menuText} to="/news">Tin tức</NavLink>
            <NavLink className={styles.menuText} to="/article">Trải nghiệm</NavLink>
            <NavLink className={styles.menuText} to="/contact">Liên hệ</NavLink>
        </div>       
        {showMenu && <HeaderMobile onHideMenu={hideMenuHandler}></HeaderMobile>}
        </>
    )
}

export default Header