import styles from './productItem.module.css'
import whyus from '../../assets/product/Why us.png'
import item1 from '../../assets/product/Group 1678.png'
import item2 from '../../assets/product/Rectangle 518.png'

function ProductItem() {
    return(
        <>
        <div className={styles.productItem}>
            <div><img src={whyus} alt="why us" /></div>
            <div className='container'>
                <p className={styles.headTittle}>Giới thiệu</p>
                <div className={styles.headLine}></div>
                <div className='row column-gap-5'>
                    <div className='col'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='col'>
                        <h3>Sản phẩm Website mini TrueConnect</h3>
                        <p>Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm của Quý khách hàng</p>
                    </div>
                </div>
                <div className='row mt-5 column-gap-5'>
                    <div className='col'>
                        <h3>Sản phẩm Website mini TrueConnect</h3>
                        <p>Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm của Quý khách hàng</p>
                    </div>
                    <div className='col'>
                        <img src={item2} alt="" />
                    </div>
                </div>

                <p className={styles.headTittle}>Tính năng sản phẩm</p>
                <div className={styles.headLine}></div>
            </div>
        </div>
        </>
    )
}

export default  ProductItem