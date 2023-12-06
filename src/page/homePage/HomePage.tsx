import Header from "../../header/Header"
import styles from './home.module.css'

function HomePage() {
    return(
        <>
        <Header></Header>
        <div className={styles.container}>
            <div className={styles.search}>
                <div className={styles.searchLeft}>
                    <p className={styles.head}>True
                    <span className={styles.head2}>Connect</span></p>
                    <p className={styles.headText}>Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default HomePage