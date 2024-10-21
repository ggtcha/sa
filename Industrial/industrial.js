import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./industrial.css";

function Industrial() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showFeatures1, setShowFeatures1] = useState(false);

    const [showDetails2, setShowDetails2] = useState(false);
    const [showFeatures2, setShowFeatures2] = useState(false);

    const [showDetails3, setShowDetails3] = useState(false);
    const [showFeatures3, setShowFeatures3] = useState(false);

    const toggleDetails1 = () => setShowDetails1(!showDetails1);
    const toggleFeatures1 = () => setShowFeatures1(!showFeatures1);

    const toggleDetails2 = () => setShowDetails2(!showDetails2);
    const toggleFeatures2 = () => setShowFeatures2(!showFeatures2);

    const toggleDetails3 = () => setShowDetails3(!showDetails3);
    const toggleFeatures3 = () => setShowFeatures3(!showFeatures3);

    return (
        
        <div className="house-container">
               <br />
      <h1 style={{ marginLeft: '25%' }}>Industrial Style</h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>บ้านที่ใช้วัสดุที่ดิบและแข็งแรง เช่น เหล็ก คอนกรีต และอิฐ</p>
      <hr style={{
          width: '50%',
          margin: 'auto',
          border: '1px solid #000',
        }} />
        <br />

            {/*Modern Loft */}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://images.homify.com/v1559812154/p/photo/image/3081696/13641137_1785731131640862_6059919283619787047_o.jpg" 
                        alt="Industrial loft "
                    />
                </div>

                <div className="house-details">
                    <p>Industrial loft</p>
                    <p>
                    บ้านสไตล์อินดัสเทรียลที่ผสมผสานกับความโมเดิร์น เน้นความดิบของวัสดุ แต่มีเสน่ห์ของการออกแบบที่ทันสมัยและใช้ประโยชน์จากพื้นที่อย่างเต็มที่
                    วัสดุที่ใช้ปูนเปลือย, เหล็กสีดำ, กระจกบานใหญ่, ไม้เนื้อแข็งสำหรับเฟอร์นิเจอร์, พื้นคอนกรีตขัดมัน
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร: 14.00 X 11.50 เมตร</li>
                                    <li> พื้นที่ใช้สอย: 250 ตารางเมตร</li>
                                    
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                    <button className="dropdown-toggle" onClick={toggleFeatures1}>
                        ฟังก์ชั่นของบ้าน
                    </button>
                    {showFeatures1 && (
                        <div className="dropdown-content">
                            <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  :  ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                                
                            </ul>
                        </div>
                    )}
                </div>
                    <hr />

                    <div className="buttons">
                        <button className="btn-more">ดูเพิ่มเติม</button>
                    </div>
                </div>
            </div>

            <br />
            {/*Contemporary Tropical Style*/}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>Industrial Lake House</p>
                    <p>
                    โครงสร้างของบ้านจะเน้นการใช้วัสดุอย่างเหล็ก, ปูน, อิฐเปลือย และไม้ในแบบดิบ ๆ ซึ่งเป็นเอกลักษณ์ของสไตล์อินดัสเทรียล เช่น โครงเหล็กเปิด, ท่อเปลือย หรือพื้นปูนขัดมัน
                    มีหน้าต่างบานใหญ่เพื่อรับแสงธรรมชาติและให้มองเห็นวิวทะเลสาบได้อย่างชัดเจน ซึ่งช่วยเชื่อมต่อระหว่างบ้านและสภาพแวดล้อมภายนอก
                    </p>
                    {/* Modern Minimalist */}
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 14.00 X 11.50 เมตร</li>
                            <li> พื้นที่ใช้สอย: 230 ตารางเมตร</li>
                    </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleFeatures2}>
                            ฟังก์ชั่นของบ้าน
                        </button>
                        {showFeatures2 && (
                            <div className="dropdown-content">
                                <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  : ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                        <button className="btn-more">ดูเพิ่มเติม</button>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_761,h_377/f_auto,q_auto/v1696609784/wordpress_assets/230509-MountainRoad-SW_BlackBeauty-BM_FromBlueprint_71037e125c.png?_i=AA"
                        alt="Industrial Lake House" 
                    />
                </div>
            </div>
                            <br />
            {/* Pitched Roof Tropical Style */}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                       src="https://f7e5m2b4.rocketcdn.me/wp-content/uploads/2017/11/Contemporary-Industrial-House-1.jpg" 
                       alt="Raw Industrial House" 
                    />
                </div>

                <div className="house-details">
                    <p>Raw Industrial House</p> 
                    <p>
                   การออกแบบบ้านที่เน้นการโชว์โครงสร้างดิบ ๆ ของวัสดุโดยไม่ผ่านการตกแต่งซ่อน เราเห็นผนังปูนเปลือย ท่อเหล็ก และสายไฟที่เปิดโล่ง ซึ่งทำให้เกิดความรู้สึกแข็งแรงและไม่ประณีต แต่กลับมีเสน่ห์เฉพาะตัว
                    ปูนเปลือย, เหล็กสีดำ, ท่อและสายไฟโชว์ตามเพดาน, กระจกบานใหญ่, พื้นปูนขัดมัน
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 13.70 X 10.30 เมตร </p>
                                <p> พื้นที่ใช้สอย: 213 ตารางเมตร </p>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleFeatures3}>
                            ฟังก์ชั่นของบ้าน
                        </button>
                        {showFeatures3 && (
                            <div className="dropdown-content">
                                <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  : ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                        <button className="btn-more">ดูเพิ่มเติม</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Industrial