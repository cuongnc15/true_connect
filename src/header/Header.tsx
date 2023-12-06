import { NavLink } from "react-router-dom"
import logo from "../assets/header/2022.08 1.png"
import styles from './header.module.css'

function Header() {
    return(
        <>
        <div className={styles.nav}>
            <NavLink to="/"><img src={logo} alt="Logo True Connect" /></NavLink>
            <NavLink className={styles.menuText} to="/">Trang chủ</NavLink>
            <NavLink className={styles.menuText} to="/about">Về chúng tôi</NavLink>
            <NavLink className={styles.menuText} to="/product">Sản phẩm và dịch vụ</NavLink>
            <NavLink className={styles.menuText} to="/news">Tin tức</NavLink>
            <NavLink className={styles.menuText} to="/article">Trải nghiệm</NavLink>
            <NavLink className={styles.menuText} to="/contact">Liên hệ</NavLink>
        </div>       
        </>
    )
}

export default Header