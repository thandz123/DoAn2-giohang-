'use client';

import Link from 'next/link';
import '../../style/app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTumblr, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'; // Sử dụng từ free-brands-svg-icons
import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function GioHang() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserOptions, setShowUserOptions] = useState(false);
    const [showBarsMenu, setShowBarsMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const handleMouseEnterUserIcon = () => {
        setShowUserOptions(true);
    };

    const handleMouseLeaveUserIcon = () => {
        setShowUserOptions(false);
    };

    const handleLoginClick = () => {
        setIsRegister(false);
        setShowLoginModal(true);
        setShowUserOptions(false);
    };

    const handleRegisterClick = () => {
        setIsRegister(true);
        setShowLoginModal(true);
        setShowUserOptions(false);
    };

    const handleModalClose = () => {
        setShowLoginModal(false);
    };

    return (
        <>
            {/* Header */}
            <div className="p1"></div>

            {/* Navbar */}
            <div className="p2">
                <img src="/logo.jpg" alt="Logo" className="cart-image1" />

                {/* Wrapper cho Bars */}
                <div
                    className="bars-icon-wrapper"
                    onMouseEnter={() => setShowBarsMenu(true)}
                    onMouseLeave={() => setShowBarsMenu(false)}
                >
                    <FontAwesomeIcon icon={faBars} className="icon-small1" />

                    {/* Cửa sổ hiện ra khi di chuột vào Bars */}
                    {showBarsMenu && (
                        <div className="bars-menu-window">
                            <div className="bars-menu-header">
                                <h3>Danh mục sản phẩm</h3>
                            </div>
                            <div className="bars-menu-body">
                                <ul>
                                    <li><Link href="/category1">Danh mục 1</Link></li>
                                    <li><Link href="/category2">Danh mục 2</Link></li>
                                    <li><Link href="/category3">Danh mục 3</Link></li>
                                    <li><Link href="/category4">Danh mục 4</Link></li>
                                    <li><Link href="/category5">Danh mục 5</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="search-bar">
    <input type="text" placeholder="Tìm kiếm..." />
    <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-small" />
    </button>
</div>


                {/* Icon người dùng */}
                <div
                    className="user-icon-wrapper"
                    onMouseEnter={handleMouseEnterUserIcon}
                    onMouseLeave={handleMouseLeaveUserIcon}
                >
                    <FontAwesomeIcon icon={faUser} className="icon-small2" />

                    {/* Tùy chọn người dùng */}
                    {showUserOptions && (
                        <div className="user-options-popover">
                            <button className="btn-login" onClick={handleLoginClick}>Đăng Nhập</button>
                            <button className="btn-register" onClick={handleRegisterClick}>Đăng Ký</button>
                        </div>
                    )}
                </div>

                <FontAwesomeIcon icon={faShoppingCart} className="icon-small2" />

                {/* Wrapper cho Icon Thông báo */}
                <div
                    className="notification-wrapper"
                    onMouseEnter={() => setShowNotifications(true)}
                    onMouseLeave={() => setShowNotifications(false)}
                >
                    <FontAwesomeIcon icon={faBell} className="icon-small2" />

                    {showNotifications && (
                        <div className="notification-popover">
                            <p>Bạn có thông báo mới!</p>
                            <button className="btn-mark-read">Đánh dấu đã đọc</button>
                            <button className="btn-view-all">Xem tất cả</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Cửa sổ Đăng Nhập/Đăng Ký */}
            {showLoginModal && (
                <div className="login-modal">
                    <div className="login-content">
                        <h2>{isRegister ? 'Đăng Ký' : 'Đăng Nhập'}</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Mật Khẩu" />
                        <button className="btn-submit">{isRegister ? 'Đăng Ký' : 'Đăng Nhập'}</button>
                        <button className="btn-close" onClick={handleModalClose}>Đóng</button>
                    </div>
                </div>
            )}

            {/* Cart Section */}
            <div className="p3">
                <div className="cart-container">
                    <h1>Giỏ Hàng</h1>
                    <div className="cart-empty">
                        <img src="/image.png" alt="Empty Cart" className="cart-image2" />
                        <p>Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                        <Link href="/shop">
                            <button className="btn-buy-now">Mua Sắm Ngay</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Guiemail">
    <h1>ĐĂNG KÝ ĐỂ NHẬN BẢN TIN</h1>
    <div className="email-subscription">
        <input 
            type="email" 
            placeholder="Nhập địa chỉ email của bạn" 
            className="email-input" 
            required 
        />
        <button className="btn-submit">Đăng ký</button>
    </div>
</div>

            



            {/* Footer Section */}
            <div className="p4">
                <img src="/logo.jpg" alt="Logo" className="logo3" />
                <div className="Noidung">
                    <p>
                        Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA
                        60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
                    </p>
                    <p>
                        Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                    </p>
                </div>

                {/* Thêm phần biểu tượng mạng xã hội */}
                <div className="social-media-icons">
                    <Link href="https://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </Link>
                    <Link href="https://youtube.com" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                    </Link>
                    <Link href="https://tumblr.com" target="_blank">
                        <FontAwesomeIcon icon={faTumblr} className="social-icon" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </Link>
                    <Link href="https://pinterest.com" target="_blank">
                        <FontAwesomeIcon icon={faPinterest} className="social-icon" />
                    </Link>
                </div>
                <div className="footer-container">
    <div className="footer-section">
        <h2>Dịch vụ</h2>
        <ul>
            
            <li><Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link></li>
            <li><Link href="/bao-mat-tt-ca-nhan">Chính sách bảo mật thông tin cá nhân</Link></li>
            <li><a href="/payment-policy">Chính sách bảo mật thanh toán</a></li>
            <li><a href="/about">Giới thiệu Fahasa</a></li>
            <li><a href="/store-locations">Hệ thống trung tâm - nhà sách</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h2>Hỗ trợ</h2>
        <ul>
        <li><a href="/return-policy">Chính sách đổi - trả - hoàn tiền</a></li>
        <li><a href="/warranty-policy">Chính sách bảo hành - bồi hoàn</a></li>
        <li><a href="/shipping-policy">Chính sách vận chuyển</a></li>
        <li><a href="/wholesale-policy">Chính sách khách sỉ</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h2>Tài khoản của tôi</h2>
        <ul>
        <li><a href="/login">Đăng nhập/Tạo mới tài khoản</a></li>
        <li><a href="/change-address">Thay đổi địa chỉ khách hàng</a></li>
        <li><a href="/account-details">Chi tiết tài khoản</a></li>
        <li><a href="/order-history">Lịch sử mua hàng</a></li>
        </ul>
    </div>
    <div className="footer-section contact-info">
        <h2>Liên hệ</h2>
        <p>60-62 Lê Lợi, Q.1, TP. HCM</p>
        <p>cskh@fahasa.com.vn</p>
        <p>1900636467</p>
    </div>
    
</div>

<div className='p5'>
    <div className="logo-container">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png" alt="Snappy" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo_lex.jpg" alt="Lex" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png" alt="Ninjavan" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png" alt="Ahamove" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="VNPost" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpay_logo.png" alt="VNPay" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/momopay.png" alt="MomoPay" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/shopeepay_logo.png" alt="ShopeePay" />
            
    </div>
    <p>Trang web nhóm 04</p>
   

</div>
            </div>
        </>
    );
}
