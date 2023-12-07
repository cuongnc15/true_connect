import { NavLink } from "react-router-dom"
import logo from "../assets/header/2022.08 1.png"
import tiktok from "../assets/footer/icon-06 1.png"
import fb from "../assets/footer/facebook 1.png"
import yb from "../assets/footer/youtube 1.png"
import styles from './footer.module.css'

function Footer() {
    return(
        <>
        <div className={styles.nav}>
            <div>
                <NavLink to="/"><img src={logo} alt="Logo True Connect" /></NavLink>           
                <div className={styles.Hero}>
                    <div className={styles.Hero1}>
                        <p className={styles.Hero1Text1}>CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT </p>
                        <p className={styles.Hero1Text}>dvkh.trueconnect@gmail.com</p>
                        <p className={styles.Hero1Text}>Hotline/Zalo: 0888 136 622</p>
                        <p className={styles.Hero1Text}>Số giấy chứng nhận đăng ký kinh doanh:</p>
                        <p className={styles.Hero1Text}>Ngày cấp: . Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội</p>
                        <p className={styles.Hero1Text}>© 2023 All Right Reserved True Connect</p>
                    </div>
                    <div className={styles.Hero2}>
                        <p className={styles.Hero1Text1}>Tài liệu</p>
                        <p className={styles.Hero1Text}>Tài liệu hướng dẫn </p>
                        <img className={styles.HeroIcon} src={tiktok} alt="Tiktok" />
                        <img className={styles.HeroIcon} src={fb} alt="Facebook" />
                        <img className={styles.HeroIcon} src={yb} alt="Youtube" />
                    </div>
                    <div className={styles.Hero3}>
                        <p className={styles.Hero1Text1}>TrueConnect </p>
                        <p className={styles.Hero1Text}>Chính sách bảo mật</p>
                        <p className={styles.Hero1Text}>Chính sách thanh toán và bán hàng </p>
                        <p className={styles.Hero1Text}>Điều khoản và điều kiện sử dụng</p>
                    </div>
                </div>
            </div>
        </div>       
        </>
    )
}

export default Footer