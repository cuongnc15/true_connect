import styles from './contact.module.css'

function Contact() {
    return(
        <>
        <div className={styles.contact}>
            <div className={styles.contactHero}>
                <div className={styles.contactText}>
                    <p className={styles.contactTextHead}>Liên Hệ</p>
                    <p className={styles.contactText2}>dvkh.trueconnect@gmail.comcom</p>
                    <p className={styles.contactText2}>80, 69b/22/45 Hoang Van Thai, Khuong Trung
                        Thanh Xuan, Ha Noi</p>
                </div>
                <div className={styles.contactForm}>
                    <input className={styles.contactFormInput} type="text" placeholder='Họ và Tên'/>
                    <input className={styles.contactFormInput} type="text" placeholder='Email của bạn'/>
                    <input className={styles.contactFormInput} type="text" placeholder='Sô điện thoại'/>
                    <input className={styles.contactFormInput} type="text" placeholder='Ghi chú '/>
                    <div>
                    <button className={styles.contactFormButton}>Gửi thông tin </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  Contact