<template>
  <div class="main-body">
    <div class="main-header">
      <div class="header-top">
        <div class="row">
          <div class="logo col-sm-7 col-lg-3">
            <img src="@/assets/images/logo_header.png" alt="" />
          </div>
          <div class="search col-lg-7 hidden-sm">
            <div class="search-input">
              <input type="text" class="" placeholder="Tìm kiếm sản phẩm" />
              <div class="icon-search-input d-flex">
                <i class="fa fa-search fa-xl" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="header-wap-icon col-sm-5 col-lg-2 d-flex">
            <i class="fa fa-user-circle-o fa-xl" aria-hidden="true"></i>
            <i class="fa fa-search fa-xl" aria-hidden="true"></i>
            <i class="fa fa-shopping-bag fa-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="menu-desktop hidden-sm">
        <div class="main-nav d-flex justify-content-center">
          <ul class="d-flex">
            <li>Giới Thiệu</li>
            <li>
              Sản Phẩm
              <div class="sub-menu">
                <div>> Áo Polo</div>
                <div>> Áo Phông</div>
                <div>> Áo Sơ Mi Dài Tay</div>
                <div>> Áo Sơ Mi Ngắn Tay</div>
                <div>> Áo Nỉ</div>
                <div>> Áo Khoác</div>
                <div>> Áo Vest</div>
                <div>> Sơ Mi Hoạ Tiết</div>
              </div>
            </li>
            <li class="menu-item">
              Khuyến Mại
              <div class="sub-menu">
                <div>Sale đồng giá 169k</div>
              </div>
            </li>
            <li>Tin Tức</li>
            <li>Tuyển Dụng</li>
            <li>Hệ Thống Cửa Hàng</li>
          </ul>
        </div>
      </div>
      <div class="search-menu-bottom display-sm">
        <div class="search-input-bottom d-flex h-100">
          <input type="text" class="w-100" placeholder="Tìm kiếm sản phẩm" />
          <div class="icon-search-input d-flex">
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row breadcrumb-shop">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5 blog-breadcrumb"
        >
            <ol class="breadcrumb breadcrumb-arrows">
                <li>
                    <a href="#">Trang chủ</a>
                </li>
                &nbsp;/&nbsp; 
                <li>Tài khoản</li>
            </ol>
    </div>
      </div>
      <div class="content-page">
        <div class="woocommerce">
            <div class="u-columns col2-set" id="customer_login">
                <div class="u-column1 col-1">
                    <h2><span>Đăng nhập</span></h2>
                    <form class="woocommerce-form woocommerce-form-login login">
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="username">Tên tài khoản hoặc địa chỉ email&nbsp;<span class="required">*</span></label>
                            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value>
                        </p>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="password">Mật khẩu&nbsp;<span class="required">*</span></label>
                            <span class="password-input">
                                <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="password" autocomplete="current-password" value>
                                <span class="show-password-input"></span>
                            </span>
                            <!-- <span class="show-password-input display-password"></span> -->
                        </p>
                        <p class="form-row">
                            <button type="" class="woocommerce-button button woocommerce-form-login__submit">
                                Đăng nhập
                            </button>
                            <label class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                <input type="checkbox">
                                <span>&nbsp;Ghi nhớ mật khẩu</span>
                            </label>
                        </p>
                        <p class="">
                            <a href="">Quên mật khẩu?</a>
                        </p>
                    </form>
                </div>
                <div class="u-column2 col-2">
                    <h2><span>Đăng ký</span></h2>
                    <form class="woocommerce-form woocommerce-form-register register">
                        <p class="woocommerce-form-row woocommerce-form-row--wide  form-row form-row-wide">
                            <label for="reg_email">Địa chỉ Email&nbsp;<span class="required">*</span></label>
                            <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value>
                        </p>
                        <p>Một mật khẩu sẽ được gửi đến địa chỉ email của bạn.</p>
                        <div>
                            <p>Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải nghiệm sử dụng website, quản lý truy cập vào tài khoản của bạn, và cho các mục đích cụ thể khác được mô tả trong chính sách riêng tư.</p>
                        </div>
                        <button type="" class="woocommerce-button button size-14 woocommerce-form-login__submit">
                                Đăng ký
                            </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="main-footer w-100">
      <div class="top-footer">
        <div class="container-fluid row">
          <div class="col-sm-12 col-lg-3">
            <div class="title-email">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              Đăng ký nhận tin
            </div>
          </div>
          <div class="col-sm-12 col-lg-5 input-footer">
            <input type="text" placeholder="Nhập email của bạn" />
            <div class="btn-register-email--footer">ĐĂNG KÝ</div>
          </div>
          <div class="col-sm-12 col-lg-4 hotline-footer">
            <i class="fa fa-phone-square fa-xl" aria-hidden="true"></i>
            Hỗ trợ / Mua hàng: <span>097 328 58 86</span>
          </div>
        </div>
      </div>
      <div class="body-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style scoped>
.breadcrumb-shop {
    background: #f5f5f5;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.woocommerce form.checkout_coupon, .woocommerce form.login, .woocommerce form.register {
    border: 1px solid #d3ced2;
    padding: 20px;
    margin: 2em 0;
    text-align: left;
    border-radius: 5px;
}
a:hover, a:focus {
    color: #6c6c70;
    text-decoration: none;
    outline: none;
}
a {
    transition: opacity 150ms linear, color 150ms linear, background 150ms linear;
}
a {
    color: #252a2b;
    text-decoration: none;
    outline: none;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.button {
    position: relative;
    display: inline-block;
    padding: 10px 28px;
    line-height: normal;
    border: 1px solid #ffffff;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;
    background-color: transparent;
    -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 1;
    color: #252a2b;
    overflow: hidden;
}
.button:before {
    position: absolute;
    content: '';
    display: block;
    left: -2px;
    top: 0;
    right: -2px;
    bottom: 0;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    z-index: -1;
}
.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button {
    font-size: 100%;
    margin: 0;
    line-height: 1;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    overflow: visible;
    padding: 0.618em 1em;
    font-weight: 700;
    border-radius: 3px;
    left: auto;
    color: #515151;
    background-color: #ebe9eb;
    border: 0;
    display: inline-block;
    background-image: none;
    box-shadow: none;
    text-shadow: none;
}
.woocommerce .woocommerce-form-login .woocommerce-form-login__submit {
    float: left;
    margin-right: 1em;
    font-size: 14px;
}
.woocommerce form .form-row {
    padding: 3px;
    margin: 0 0 6px;
}
.woocommerce form .show-password-input, .woocommerce-page form .show-password-input {
    position: absolute;
    right: 0.7em;
    top: 0.7em;
    cursor: pointer;
}
.woocommerce form .show-password-input.display-password::after, .woocommerce-page form .show-password-input.display-password::after {
    color: #585858;
}
.woocommerce form .show-password-input::after, .woocommerce-page form .show-password-input::after {
    font-family: WooCommerce;
    speak: never;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    margin-left: 0.618em;
    content: "";
    text-decoration: none;
}
.woocommerce form .form-row input.input-text, .woocommerce form .form-row textarea {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    outline: 0;
    line-height: normal;
}
.woocommerce form .form-row .input-text, .woocommerce-page form .form-row .input-text {
    box-sizing: border-box;
    width: 100%;
    display: flex;
}
#order_comments, .woocommerce input:not([type="radio"]):not([type="checkbox"]), .woocommerce button, .woocommerce select, .woocommerce .button {
    height: 40px;
    line-height: 36px;
    background-color: #f2f2f2;
    box-shadow: 0 1px 1px rgb(0 0 0 / 13%) inset;
    font-weight: 400;
    border: 1px solid #ccc;
    border-radius: 0;
    color: #878787;
    font-size: 13px;
    max-width: 100%;
    padding: 0 15px;
}
.woocommerce form .show-password-input, .woocommerce-page form .show-password-input {
    position: absolute;
    right: 0.7em;
    top: 0.7em;
    cursor: pointer;
}
input {
    line-height: normal;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}
.woocommerce form .form-row {
    padding: 3px;
    margin: 0 0 6px;
}
.woocommerce form .form-row label {
    line-height: 2;
}
.woocommerce form .form-row label, .woocommerce-page form .form-row label {
    display: block;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 700;
}
.woocommerce form .form-row-wide, .woocommerce-page form .form-row-wide {
    clear: both;
}
p {
    margin: 0 0 10px 0;
    line-height: 21px;
    font-size: 14px;
}
.size-14{
font-size: 14px!important;
}
.woocommerce .col2-set, .woocommerce-page .col2-set {
    width: 100%;
}
.breadcrumb-shop .breadcrumb-arrows {
    padding: 10px 0;
    background: transparent;
    border-radius: 0;
    margin: 0;
}
.woocommerce form.checkout_coupon, .woocommerce form.login, .woocommerce form.register {
    border: 1px solid #d3ced2;
    padding: 20px;
    margin: 2em 0;
    text-align: left;
    border-radius: 5px;
}
h1, h2, h3, h4, h5, h6 {
    color: #252a2b;
    margin: 0 0 13px 0;
    font-weight: 500;
    line-height: 1.2;
}
.woocommerce .col2-set .col-1, .woocommerce-page .col2-set .col-1 {
    float: left;
    width: 48%;
}
.woocommerce .col2-set .col-2, .woocommerce-page .col2-set .col-2 {
    float: right;
    width: 48%;
}
.breadcrumb {
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
}
.col-xs-12 {
    width: 100%;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    float: left;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px!important;
    padding-left: 15px!important;
}
@media (min-width: 768px){
.col-sm-12 {
    width: 100%;
}
.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
}
}
@media (min-width: 1200px){
.col-lg-12 {
    width: 100%;
}
.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
}
}
.row{
    align-items: center;
}
@media screen and (min-width: 992px){
    .logo img{
        max-height: 80px !important;
        max-width: 160px !important;
        cursor: pointer;
    }
    .hotline-footer{
        padding-left: 30px !important;
    }
    .col-md-12 {
    width: 100%;
}
    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
}
    
}

@media screen and (max-width: 992px){
    .main-header{
        padding: 0 !important;
    }
    .header-top{
        padding-right: 30px !important;
        padding-left: 30px !important;
    }
    .search-menu-bottom{
        margin: 0 20px;
    }
    .search-input-bottom{
        margin-top: 10px !important;
    }
    .header-top{
        height: 70px !important;
    }
   .hidden-sm{
        display: none;
   }
   .display-sm{
        display: block !important;
   }
   .title-email{
    margin-bottom: 20px !important;
   }
   .input-footer{
    margin-bottom: 10px !important;
   }
   .hotline-footer{
    padding-left: 0;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
   }
}

.header-top{
    height: 100px;
    padding-bottom: 10px;
    padding-top: 20px;
}
.main-header{
    padding: 0 60px;
}
.logo{
    padding: 0;
    text-align: left;
}
.logo img{
    max-height: 50px;
    max-width: 160px;
}

.search-input{
    position: relative;
}
.search-input input{
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    height: 55px;
    font-size: 15px;
    font-weight: 500;
    padding: 0 55px 0 20px;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}

.search-input input:focus-visible{
    outline: none !important;
}

.search-input .icon-search-input{
    position: absolute;
    width: 55px;
    height: 55px;
    top: 0;
    right: 0;
}
.icon-search-input .fa-search{
    width: 55px;
    margin: auto;
    cursor: pointer;
}
.header-wap-icon{
    justify-content: end;
}
.header-wap-icon .fa{
    margin: 8px 5px 0;
    cursor: pointer;
}
.menu-desktop{
    border-top: 1px solid #eee;
    justify-content: center;
    margin: 0 -60px;
    position: relative;
}
.main-nav ul{
    padding: 0;
    margin: 0;
    list-style: none;
}

.main-nav li{
    height: 46px;
    margin-right:  25px;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 15px;
}
.breadcrumb-shop .breadcrumb-arrows li {
    font-size: 13px;
}
h2 {
    font-size: 28px;
}
.main-nav li:hover{
    color: #f94c43;
    border-bottom: 2px solid #f94c43;;
}
.main-nav li:nth-child(3){
    position: relative;
}
.main-nav li:nth-child(2){
    position: relative;
}
li:nth-child(3):hover .sub-menu{
    display: block !important;
}

li:nth-child(2):hover .sub-menu{
    display: block !important;
}


.main-nav .sub-menu{
    position: absolute;
    top: 46px;
    background: yellow;
    padding: 9px 18px;
    white-space: nowrap;
    text-align: left;
    font-size: 14px;
    display: none;
    color: #252a2b;
    /* transition: height 2s;
    -moz-transition: height 2s;
    -webkit-transition: height 2s;
    -o-transition: height 2s; */
}
.sub-menu>*:hover{
    color: #f94c43;
}
.search-menu-bottom{
    border-top: 1px solid #eee;
    display: none;
    height: 30px;
    font-size: 12px;
    position: relative;
}
.search-menu-bottom .icon-search-input{
    position: absolute;
    height: 30px;
    margin: auto;
    right: 0;
}
.search-input-bottom{
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}
.search-input-bottom input{
    padding-left: 20px;
    padding-right: 55px;
    border: none;
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}
.search-input-bottom input:focus-visible{
    outline: none !important;
}
.main-footer{
    position: fixed;
    bottom: 0;
    left: 0;
}
.top-footer{
    background: #f3f3f3;
    padding: 15px 0;
}
.container-fluid{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1250px;
}
.title-email{
    text-align: left;
}
.title-email .fa{
    margin-right: 10px;
}
.input-footer{
    position: relative;
}
.input-footer input{
    height: 46px;
    border: 1px solid #e7e7e7;
    box-shadow: none;
    height: 45px;
    font-weight: 500;
    padding: 0 20px;
    background: #fbfbfb;
    color: #252a2b;
    width: 100%;
}
.input-footer input:focus-visible{
    outline: none !important;;
}
.btn-register-email--footer{
    position: absolute;
    top: 0;
    right: 0;
    line-height: 45px;
    right: 0;
    top: 0;
    padding: 0 12px;
    background-color: black;
    color: #fff;
    font-size: 12px;
}
.hotline-footer{
    display: flex;
    align-items: center;
}
.hotline-footer .fa{
    margin-right: 5px;
}
a {
    color: #252a2b;
    text-decoration: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-size: 14px;
}

/* css phần main footer */
.body-footer{
    padding: 40px 0 30px;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
}
</style>
