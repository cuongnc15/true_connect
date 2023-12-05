import { NavLink } from "react-router-dom"
import logo from "../assets/header/2022.08 1.png"

function Header() {
    return(
        <>
        <NavLink to="/"><img src={logo} alt="Logo True Connect" /></NavLink>
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/about">Về chúng tôi</NavLink>
        <NavLink to="/product">Sản phẩm và dịch vụ</NavLink>
        </>
    )
}

export default Header