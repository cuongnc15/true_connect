import styles from './contact.module.css'
import phone from '../../assets/contact/Sốđiệnthoại 1.png'
import mess from '../../assets/contact/icon-02 1.png'
import zalo from '../../assets/contact/zalo 1.png'

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
            <div className={styles.contactIcon1}><img src={phone} alt="" /></div>
            <div className={styles.contactIcon2}><img src={mess} alt="" /></div>
            <div className={styles.contactIcon3}><img src={zalo} alt="" /></div>
        </div>
        </>
    )
}

export default  Contact