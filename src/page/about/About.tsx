import styles from './about.module.css'

function About() {
    return(
        <>
        <div className="container">
            <div className={styles.head}>
                <p className={styles.headTittle}>VỀ CHÚNG TÔI</p>
                <div className="container text-right">
                    <div className='row'>
                    <div className={`col-lg-6 ps-0 col-sm-12 ${styles.headList1}`}>
                        <p>Kết sức mạnh, Nối thành công</p>
                    </div>
                    <div className="col-lg-3 ps-0 col-sm-12">
                        <p>Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị</p>
                    </div>
                    <div className="col-lg-3 ps-0 col-sm-12">
                        <p>Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet augue. Vivamus euismod mauris.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  About