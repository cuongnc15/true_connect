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
import chooseUs1 from '../../assets/chooseUs/illustration_benefits.png'
import chooseUs2 from '../../assets/chooseUs/Group 1663.png'
import chooseUs3 from '../../assets/chooseUs/illustration_marketing_contact.png'
import product from '../../assets/product/PhotoRoom_20230807_104800 1.png'
import newsHead from '../../assets/news/Image Ratio Overlay.png'
import newsItem1 from '../../assets/news/Image Ratio.png'
import newsItem2 from '../../assets/news/Image Ratio2.png'
import newsItem3 from '../../assets/news/Image Ratio3.png'
import newsItem4 from '../../assets/news/Image Ratio4.png'
import { NavLink } from "react-router-dom"

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

            <div>
                <p className={styles.chooseUsTittle}>Tại sao nên lựa chọn chúng tôi</p>                      
            </div>  

            <div className={styles.chooseUsList}>
                <div className={styles.chooseUs}>
                    <img src={chooseUs1} alt="" />
                    <p className={styles.chooseUsHead}>Giá cả hợp lý</p>
                    <p className={styles.chooseUsText}>Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối tượng.</p>
                </div>                            
                <div className={styles.chooseUs}>
                    <img src={chooseUs2} alt="" />
                    <p className={styles.chooseUsHead}>Chất lượng đảm bảo</p>
                    <p className={styles.chooseUsText}>Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với xu hướng.</p>
                </div>                            
                <div className={styles.chooseUs}>
                    <img src={chooseUs3} alt="" />
                    <p className={styles.chooseUsHead}>Mới mẻ và tiện lợi</p>
                    <p className={styles.chooseUsText}>Nhiều tính năng mới lạ, tiện dụng với người sử dụng.</p>
                </div>                            
            </div>

            <div className={styles.product}>
                <p className={styles.productTittle}>Hệ sinh thái <span className={styles.productTittle2}>True</span><span className={styles.productTittle3}>Connect</span></p>                            
                <div style={{position: "absolute",
                                right: "90px",
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
                <div className={styles.productHero}>
                    <div className={styles.productHero1}>
                        <NavLink className={styles.productHero1Text} to="/">Danh thiếp điện tử </NavLink>
                        <NavLink className={styles.productHero1Text} to="/">Website mini </NavLink>
                        <NavLink className={styles.productHero1Text} to="/">Web doanh nghiệp</NavLink>
                        <NavLink className={styles.productHero1Text} to="/">Dịch vụ tư vấn Chuyển đổi số</NavLink>
                        <NavLink className={styles.productHero1Text} to="/">Phòng CNTT thuê ngoài </NavLink>
                        <NavLink className={styles.productHero1Text} to="/">Ứng dụng cho doanh nghiệp SME</NavLink>
                    </div>
                    <div className={styles.productHero2}>
                        <img src={product} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.news}>
                <div className={styles.newsTittle}>
                    <div>
                    <p className={styles.newsTittleHead}>Bài viết mới nhất</p>                           
                    <p className={styles.newsTittleText}>Nơi những khách hàng của TrueConnect cập nhật những tin tức mới nhất về thị trường công nghệ</p>
                    </div>
                    <div className={styles.newsTittleIcon}>
                    <div style={{position: "absolute",
                                right: "100px",
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
                </div>
                <div className={styles.newsList}>
                    <div className={styles.newsListHead}
                        style={{backgroundImage: `url(${newsHead})`}}>
                        <div className={styles.newsListHeadText}>
                            <p>24 May 2019 8 mins</p>
                            <p>Event On A Budget: 7 Tips From The Great Depression</p>
                            <p>Aenean viverra rhoncus pede. Phasellus blandit leo ut odio. Pellentesque commodo eros a enim. Phasellus consectetuer vestibulum elit.</p>
                        </div>
                    </div>
                    <div className={styles.newsListItem1}><img src={newsItem1} alt="" /></div>                   
                    <div className={styles.newsListItem2}><img src={newsItem2} alt="" /></div>                   
                    <div className={styles.newsListItem3}><img src={newsItem3} alt="" /></div>                   
                    <div className={styles.newsListItem4}><img src={newsItem4} alt="" /></div>                   
                </div>                        
            </div>
        </div>
        </>
    )
} 

export default HomePage