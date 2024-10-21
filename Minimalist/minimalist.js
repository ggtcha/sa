import React, { useState } from 'react';
import "./minimalist.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Minimalist() {
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
      <h1 style={{ marginLeft: '25%' }}>Minimalist Style</h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>เน้นการออกแบบที่เรียบง่ายและสะอาดตา ใช้พื้นที่อย่างมีประสิทธิภาพ
</p>
      <hr style={{
          width: '50%',
          margin: 'auto',
          border: '1px solid #000',
        }} />
        <br />
            {/*1*/}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://housethailand.live/wp-content/uploads/2024/03/huge-modern-house-plan-by-art-home-1.jpg" // replace with actual image URL
                        alt="MI-01"
                    />
                </div>

                <div className="house-details">
                    <p>MI-01</p>
                    <p>
                    ใช้การออกแบบที่เรียบง่ายแต่ทันสมัย เน้นการใช้วัสดุที่ล้ำสมัยเช่น กระจกและโลหะ มีเส้นสายและรูปทรงที่ชัดเจน ลดทอนรายละเอียดให้เหลือแต่สิ่งจำเป็นเท่านั้นใช้กระจกช่วยให้แสงธรรมชาติส่องเข้ามาในบ้านมากขึ้น ใช้โทนสีขาว เทา ดำ และวัสดุสมัยใหม่เพื่อสร้างความรู้สึกหรูหราแต่ไม่ซับซ้อน
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร:120-180 ตารางเมตร</li>
                                    <li> พื้นที่ใช้สอย:110-160 ตารางเมตร</li>
                                    
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
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง </li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                        </div>
                    )}
                </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/MI01" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>

            <br />
            {/* 2 */}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>MI-02</p>
                    <p>
                   การออกแบบที่เน้นความเรียบง่าย ความอบอุ่น และการใช้แสงธรรมชาติอย่างเต็มที่ บ้านแบบนี้เหมาะสำหรับสภาพภูมิอากาศที่หนาวเย็น แต่ยังให้ความรู้สึกสบาย
                   เน้นโทนสีขาว ครีม และสีไม้ธรรมชาติ รวมถึงการใช้เฟอร์นิเจอร์ไม้เรียบง่าย ตกแต่งด้วยผ้าและพรมเพื่อเพิ่มความอบอุ่น
                    </p>
                    
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 100-150 ตารางเมตร</li>
                            <li> พื้นที่ใช้สอย: 90-120 ตารางเมตร</li>
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
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง </li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/MI02" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://assets.onepropertee.com/720x540/listing_images/306286269-5831448606879804-2113726818357354520-n.G6cqbnPMAStx62i2s.jpg"
                        alt="MI-02"
                    />
                </div>
            </div>
            {/* 3 */}
             <br />
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/dJL6NAEzYo3hA4zuo6tpJh-320-80.jpg"
                        alt="MI-03"
                    />
                </div>

                <div className="house-details">
                    <p>MI-03</p> 
                    <p>
                    เน้นการเชื่อมโยงกับธรรมชาติและการใช้ชีวิตที่เรียบง่าย ลดทอนสิ่งที่ไม่จำเป็น และเพิ่มพื้นที่ว่างเพื่อสร้างบรรยากาศที่สงบและผ่อนคลาย
                    การใช้วัสดุธรรมชาติ เช่น ไม้ ไม้ไผ่ หิน และผิวสัมผัสที่เรียบง่าย ตกแต่งด้วยเฟอร์นิเจอร์น้อยชิ้น เน้นโทนสีอ่อนและความโปร่งโล่ง
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 80-120 ตารางเมตร </p>
                                <p> พื้นที่ใช้สอย: 70-100 ตารางเมตร </p>
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
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                                
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/MI03" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Minimalist;