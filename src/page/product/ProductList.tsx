import styles from './product.module.css'
import product1 from '../../assets/product/Black.png'
import product2 from '../../assets/product/Vector.png'
import product3 from '../../assets/product/Black (1).png'
import product4 from '../../assets/product/Vector2.png'
import product5 from '../../assets/product/Black (2).png'
import product6 from '../../assets/product/Vector (1).png'
import { NavLink } from 'react-router-dom'

function ProductList() {
    return(
        <>
        <div className={styles.container}>
            <div className={`container ${styles.hero}`}>
                <div className='row '>
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product1} alt="" />
                            <div className='col align-self-center'>
                                <NavLink to="/productItem">
                                    <h3 className=''>Website Mini</h3>
                                </NavLink>
                                <p className=''>Tạo website đơn giản tích hợp gian hàng online</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product2} alt="" />
                            <div className='col align-self-center'>
                                <h3 className=''>Danh thiếp điện tử</h3>
                                <p className=''>Xây dựng thương hiệu cá nhân trên mọi nền tảng</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product3} alt="" />
                            <div className='col align-self-center'>
                                <h3 className=''>Dịch vụ Phát triển website</h3>
                                <p className=''>Xây dựng và nhập liệu website phù hợp cho doanh nghiệp</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className='row '>
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product4} alt="" />
                            <div className='col align-self-center'>
                                <h3 className=''>Dịch vụ Công nghệ thông tin cho thuê</h3>
                                <p className=''>Phát triển phần mềm CNTT phục vụ cho Doanh nghiệp</p>
                            </div>
                        </div>
                    </div> 
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product5} alt="" />
                            <div className='col align-self-center'>
                                <h3 className=''>Dịch vụ Quản trị, vận hành và tối ưu hệ thống (Managed Services)</h3>
                            </div>
                        </div>
                    </div> 
                    <div className='col-lg-4 col-sm-12 py-5'>
                        <div className='row'>
                            <img className='col ' src={product6} alt="" />
                            <div className='col align-self-center'>
                                <h3 className=''>Dịch vụ Tư vấn chuyển đổi số</h3>
                                <p className=''>Tư vấn tận dụng Công nghệ để tối ưu hóa hoạt động doanh nghiệp</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default  ProductList