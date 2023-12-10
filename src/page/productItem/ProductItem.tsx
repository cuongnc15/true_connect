import styles from './productItem.module.css'
import whyus from '../../assets/product/Why us.png'
import item1 from '../../assets/product/Group 1678.png'
import item2 from '../../assets/product/Rectangle 518.png'
import star from '../../assets/product/star.png'

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

                <div>
                    <div className='row justify-content-center'>
                        <div className='col-5'></div>
                        <div className='col-1 text-center'><img src={star} alt="" /></div>
                        <div className='col-5 text-start'>
                            <h3 className={styles.valueHead}>Xây dựng website bán hàng trực tuyến</h3>
                            <p className={styles.functionText}>Website mini bao gồm thông tin sản phẩm, bài đăng, tích hợp các chức năng dành cho bán hàng trực tuyến.Thao tác dễ dàng trên điện thoại giúp Quý khách hàng có thể tạo showcase trực quan, nhanh chóng.
                                Website Mini là một trang web đơn trang, tập trung vào nội dung quan trọng nhất. Bạn có thể sử dụng nó    để giới thiệu sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.</p>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-5 text-end'>
                            <h3 className={styles.valueHead}>Khả năng tùy chỉnh</h3>
                            <p className={styles.functionText}>Quý khách hàng cũng có thể tùy chỉnh thông tin logo, banner và tên công ty để phù hợp với thương hiệu của mình. Quý khách hàng cũng có thể đăng tải một số lượng bài viết hoặc sản phẩm theo nhu cầu của mình.</p>
                        </div>
                        <div className='col-1 text-center'>
                            <div>
                                <img src={star} alt="" /> 
                            </div>
                            <div className={styles.line}>
                                <div className={`col-6 ${styles.featureLine}`}></div>
                                <div className='col-6'></div>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-5'></div>
                        <div className='col-1 text-center'><img src={star} alt="" /></div>
                        <div className='col-5'>
                            <h3 className={styles.valueHead}>Phân loại sản phẩm theo nhóm</h3>
                            <p className={styles.functionText}>Quý khách hàng có thể phân loại thông tin. Các nhóm sản phẩm cũng có thể thêm, sửa, xóa, đổi vị trí một cách dễ dàng.</p>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-5 text-end'>
                            <h3 className={styles.valueHead}>Cập nhật thông tin trạng thái sản phẩm</h3>
                            <p className={styles.functionText}>Quý khách có thể cập nhật trạng thái như còn hàng, hết hàng hay ẩn sản phẩm khỏi danh mục bán hàng. Quý khách có thể theo dõi trạng thái sản phẩm trong danh mục quản lý của mình.</p>
                        </div>
                        <div className='col-1 text-center'><img src={star} alt="" /></div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  ProductItem