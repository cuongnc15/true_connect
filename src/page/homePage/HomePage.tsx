import Header from "../../header/Header"
import styles from './home.module.css'
import searchIcon from '../../assets/iconSearch/ic_search.png'
import headIcon from '../../assets/iconSearch/Component 2.png'
import IntroLeft1 from '../../assets/homeIntro/Frame 81.png'
import IntroLeft2 from '../../assets/homeIntro/Frame 82.png'
import IntroLeft3 from '../../assets/homeIntro/Frame 83.png'
import IntroLeft4 from '../../assets/homeIntro/chevron down.png'
import IntroRight1 from '../../assets/homeIntro/Frame 629.png'
import IntroRight2 from '../../assets/homeIntro/Frame 87.png'
import IntroRight3 from '../../assets/homeIntro/Frame 88.png'

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
                    <div className={styles.seachInput}>
                        <input type="text" />
                        <div className={styles.searchIcon}><img src={searchIcon} alt="" /></div>
                    </div>                   
                </div>
                <div className={styles.searchRight}>
                    <img src={headIcon} alt="Search" />
                </div>
            </div>

            <div className={styles.intro}>
                <div className={styles.introLeft}>
                    <p className={styles.introHead}>Công ty Cổ phần Công nghệ <span className={styles.introHead2}>True</span>Connect</p>
                    <p className={styles.introText}>Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh ...
                    </p>
                    <div className={styles.introIconList}>
                        <div className={styles.introIcon}>
                            <img src={IntroLeft1} alt="Intro" />
                            <p className={styles.introIconText}>Tận tâm</p>
                        </div>
                        <div className={styles.introIcon}>
                            <img src={IntroLeft2} alt="Intro" />
                            <p className={styles.introIconText}>Lắng nghe</p>
                        </div>
                        <div className={styles.introIcon}>
                            <img src={IntroLeft3} alt="Intro" />
                            <p className={styles.introIconText}>Sáng tạo</p>
                        </div>
                    </div>
                    <div style={{position: "absolute",
                                right: "0px",
                                width: "129px",
                                height: "30px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                                }}>
                        <a href="" style={{textDecoration: "none",
                                        color: "#FF0054",
                                        fontSize: "20px",
                                        fontWeight: "600"
                                        }}>Xem thêm</a>
                        <img src={IntroLeft4} alt="" style={{
                                        width: "24px",
                                        height: "24px"
                                        }}/>
                    </div>
                </div>
                <div className={styles.introRight}>
                    <div className={styles.introRight1}><img src={IntroRight1} alt="" /></div>                                           
                    <div className={styles.introRight2}><img src={IntroRight2} alt="" /></div>                                           
                    <div className={styles.introRight3}><img src={IntroRight3} alt="" /></div>                                           
                </div>
            </div>
        </div>
        </>
    )
} 

export default HomePage