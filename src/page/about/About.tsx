import styles from './about.module.css'
import headImg from "../../assets/about/z4585928950304_185ea8c637c7f3f7196ca2263ee2240f.png"
import intro1 from "../../assets/intro/Rectangle 606.png"
import intro2 from "../../assets/intro/Rectangle 519.png"
import intro3 from "../../assets/intro/Rectangle 607.png"
import vision from "../../assets/vision/illustration_marketing_market.png"
import vision2 from "../../assets/vision/nhan 1.png"
import value from "../../assets/about/illustration_benefits.png"

function About() {
    return(
        <>
        <div className="container">
            <div className={`pt-8 ${styles.head}`}>
                <p className={styles.headTittle}>VỀ CHÚNG TÔI</p>
                <div className={styles.headLine}></div>
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
                <div className="pt-5 d-none d-sm-block"><img src={headImg} alt="" /></div>
            </div>

            <div className={styles.intro}>
                <p className={styles.headTittle}>GIỚI THIỆU</p>
                <div className={styles.headLine}></div>
                <div>
                <div className={styles.introT}>T</div><span>hành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ TrueConnect hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh.</span>                    
                </div>
                <p className='align-justify'>Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm phong phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với các cá nhân kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi phí hợp lý cũng đóng vai trò quan trọng trong quá trình hoạt động.
                </p>
                <p>Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ phần Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu và phát triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần mềm liên kết chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm tốt trong quá trình vận hành và phát triển kinh doanh.</p>
                <p>Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện thoại và bao gồm các sản phẩm, giải pháp và dịch vụ sau:</p>
                <div className='row py-5'>
                    <div className='col-4 d-none d-sm-block'><img src={intro1} alt="" /></div>
                    <div className='col-4 d-none d-sm-block'><img src={intro2} alt="" /></div>
                    <div className='col-4 d-none d-sm-block'><img src={intro3} alt="" /></div>
                </div>
            </div>

            <ul className="list-group px-5">
                <li className="list-group-item py-5" aria-current="true">Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng online</li>
                <li className="list-group-item py-5">Giải pháp: Quản trị doanh nghiệp (HRM, ERP)</li>
                <li className="list-group-item active py-5">Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed Services), dịch vụ tư vấn chuyển đổi số</li>
            </ul>
            <p className='py-5'>Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với hơn 30 nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã có kinh nghiệm nhiều năm trong lĩnh vực Công nghệ thông tin, có kinh nghiệm phát triển, triển khai và vận hành những dự án lớn hàng triệu người dùng.</p>

            <div className='vision'>
                <div className='py-5 row'>
                    <div className='col align-self-center'>
                        <p className={styles.headTittle}>TẦM NHÌN VÀ SỨ MỆNH</p>
                        <div className={styles.headLine}></div>
                        <div className='row'>
                            <div className='col-1'><img src={vision2} alt="" /></div>
                            <p className={`col-5 ps-5 ${styles.visionText}`}>SỨ MỆNH</p>
                        </div>
                    </div>
                    <div className='col text-end'>
                        <img src={vision} alt="" />
                    </div>
                </div>
            </div>

            <ul className="list-group px-5">
                <li className="list-group-item py-5" aria-current="true">Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng online</li>
                <li className="list-group-item py-5">Giải pháp: Quản trị doanh nghiệp (HRM, ERP)</li>
                <li className="list-group-item active py-5">Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed Services), dịch vụ tư vấn chuyển đổi số</li>
            </ul>

            <div className='row py-5'>
                <div className='col-1'><img src={vision2} alt=""/></div>
                <p className={`col-5 ${styles.visionText}`}>TẦM NHÌN </p>
            </div>

            <p>Trở thành Đối tác đồng hành hàng đầu/top 1 Việt Nam về hệ sinh thái công nghệ và các giải pháp kinh doanh toàn diện, đơn giản, thống nhất dành cho cá nhân, tổ chức và doanh nghiệp thực hiện hoạt động kinh doanh.</p>
            
            <div className={styles.value}>
                <p className={styles.headTittle}>NĂNG LỰC CỐT LÕI</p>
                <div className={styles.headLine}></div>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col bg-white m-3'>
                                <h3 className={styles.valueHead}>1. Nền tảng</h3>
                                <p className={styles.valueText}>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                            </div>
                            <div className='col bg-white m-3'>
                                <h3 className={styles.valueHead}>2. Tham vọng</h3>
                                <p className={styles.valueText}>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                            </div>
                            <div className='bg-white me-3 ms-3'>
                                <h3 className={styles.valueHead}>5. Tôn chỉ hành động:</h3>
                                <p className={styles.valueText}>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='bg-white m-3 p-2'>
                            <h3 className={styles.valueHead}>3. Thích nghi</h3>
                            <p className={styles.valueText}>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                        </div>
                        <div className='bg-white m-3 p-2'>
                            <h3 className={styles.valueHead}>4. Chất lượng dịch vụ</h3>
                            <p className={styles.valueText}>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5'>
                <p className={styles.headTittle}>GIÁ TRỊ CỐT LÕI</p>
                <div className={styles.headLine}></div>
                <div className='row'>
                    <div className='col-4'>
                        <div>
                            <h3>Tôn trọng (Respect)</h3>
                            <p>Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp luật</p>
                        </div>
                        <div>
                            <h3>Lắng nghe (Listen)</h3>
                            <p>Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để phát triển</p>
                        </div>
                        <div>
                            <h3>Chia sẻ (Share)</h3>
                            <p>Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ, cùng hướng về mục tiêu chung</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={value} alt="" />
                    </div>
                    <div className='col-4'>
                        <div>
                            <h3>Đồng hành (Company)</h3>
                            <p>Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp luật</p>
                        </div>
                        <div>
                            <h3>Sáng tạo (Creative)</h3>
                            <p>Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để phát triển</p>
                        </div>
                        <div>
                            <h3>Nâng tầm (Elevate)</h3>
                            <p>Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ, cùng hướng về mục tiêu chung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  About