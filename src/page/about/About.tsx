import styles from './about.module.css'

function About() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.head}>
                <p className={styles.headTittle}>VỀ CHÚNG TÔI</p>
                <div className={styles.headList}>
                    <div className={styles.headList1}>
                        <p>Kết sức mạnh, Nối thành công</p>
                    </div>
                    <div className={styles.headList2}>
                        <p>Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị</p>
                    </div>
                    <div className={styles.headList3}>
                        <p>Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet augue. Vivamus euismod mauris.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  About