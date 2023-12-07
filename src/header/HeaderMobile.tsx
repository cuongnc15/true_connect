import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

function HeaderMobile(props: any) {

    const hideMenu = () => {
        props.onHideMenu();
    };

    return(
        <>
        <div className={styles.nav}>
            <NavLink className={styles.menuTextm} to="/" onClick={hideMenu}>Trang chủ</NavLink>
            <NavLink className={styles.menuTextm} to="/about" onClick={hideMenu}>Về chúng tôi</NavLink>
            <NavLink className={styles.menuTextm} to="/product" onClick={hideMenu}>Sản phẩm và dịch vụ</NavLink>
            <NavLink className={styles.menuTextm} to="/news" onClick={hideMenu}>Tin tức</NavLink>
            <NavLink className={styles.menuTextm} to="/article" onClick={hideMenu}>Trải nghiệm</NavLink>
            <NavLink className={styles.menuTextm} to="/contact" onClick={hideMenu}>Liên hệ</NavLink>
        </div>   
        </>
    )
}

export default  HeaderMobile