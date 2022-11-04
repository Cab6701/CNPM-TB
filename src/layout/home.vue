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

    <div class="main-content">
      <div class="slider">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/images/Banner-web.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Banner-web.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/web-1(1).jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Web-1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Web.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="top-seller">
        <div class="title-top-seller">
          <div class="container-fluid">
            <h2>SẢN PHẨM BÁN CHẠY</h2>
          </div>
        </div>
        <div class="content-top-seller">
          <div class="container-fluid">
            <div class="row-content">
              <div class="product-list clearfix flex wrap">
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                      <div class="div-variant">
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-19.jpg"
                            alt=""
                          />
                          <span>Xanh rêu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-3.jpg"
                            alt=""
                          />
                          <span>Nâu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-9.jpg"
                            alt=""
                          />
                          <span>Be</span>
                        </span>
                      </div>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK341</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>399.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK328-QACTK302-9-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK328</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>425.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo khoác nam ADLTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>849.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo thun dài tay ATDTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>345.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/POTTK316-QJDTK302-1-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo polo nam POTTK316</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>365.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/QATTK301-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần âu nam QATTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>498.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/QATTK304-8-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần âu nam QATTK304</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>455.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/qjdtk302-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần jeans nam QJDTK302</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>485.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-product">
        <div class="title-new-product">
          <div class="container-fluid">
            <h2>Hàng mới về</h2>
          </div>
        </div>
        <div class="content-new-product">
          <div class="container-fluid">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active flex wrap">
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="carousel-item flex wrap">
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="carousel-item flex wrap">
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="col-md-3 pro-loop">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
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
  components: [],
  data() {},
};
</script>
    
<style scoped>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
.row {
  align-items: center;
}
@media screen and (min-width: 992px) {
  .logo img {
    max-height: 80px !important;
    max-width: 160px !important;
    cursor: pointer;
  }
  .hotline-footer {
    padding-left: 30px !important;
  }
}
@media screen and (max-width: 992px) {
  .main-header {
    padding: 0 !important;
  }
  .header-top {
    padding-right: 30px !important;
    padding-left: 30px !important;
  }
  .search-menu-bottom {
    margin: 0 20px;
  }
  .search-input-bottom {
    margin-top: 10px !important;
  }
  .header-top {
    height: 70px !important;
  }
  .hidden-sm {
    display: none;
  }
  .display-sm {
    display: block !important;
  }
  .title-email {
    margin-bottom: 20px !important;
  }
  .input-footer {
    margin-bottom: 10px !important;
  }
  .hotline-footer {
    padding-left: 0;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }
}
.header-top {
  height: 100px;
  padding-bottom: 10px;
  padding-top: 20px;
}
.main-header {
  padding: 0 60px;
}
.logo {
  padding: 0;
  text-align: left;
}
.logo img {
  max-height: 50px;
  max-width: 160px;
}
.search-input {
  position: relative;
}
.search-input input {
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
.search-input input:focus-visible {
  outline: none !important;
}
.search-input .icon-search-input {
  position: absolute;
  width: 55px;
  height: 55px;
  top: 0;
  right: 0;
}
.icon-search-input .fa-search {
  width: 55px;
  margin: auto;
  cursor: pointer;
}
.header-wap-icon {
  justify-content: end;
}
.header-wap-icon .fa {
  margin: 8px 5px 0;
  cursor: pointer;
}
.menu-desktop {
  border-top: 1px solid #eee;
  justify-content: center;
  margin: 0 -60px;
  position: relative;
}
.main-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.main-nav li {
  height: 46px;
  margin-right: 25px;
  padding-top: 10px;
  padding-bottom: 15px;
}
.main-nav li:hover {
  color: #f94c43;
  border-bottom: 2px solid #f94c43;
}
.main-nav li:nth-child(3) {
  position: relative;
}
.main-nav li:nth-child(2) {
  position: relative;
}
li:nth-child(3):hover .sub-menu {
  display: block !important;
}
li:nth-child(2):hover .sub-menu {
  display: block !important;
}
.main-nav .sub-menu {
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
.sub-menu > *:hover {
  color: #f94c43;
}
.search-menu-bottom {
  border-top: 1px solid #eee;
  display: none;
  height: 30px;
  font-size: 12px;
  position: relative;
}
.search-menu-bottom .icon-search-input {
  position: absolute;
  height: 30px;
  margin: auto;
  right: 0;
}
.search-input-bottom {
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
.search-input-bottom input {
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
.search-input-bottom input:focus-visible {
  outline: none !important;
}
.main-footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
.top-footer {
  background: #f3f3f3;
  padding: 15px 0;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1250px;
}
.title-email {
  text-align: left;
}
.title-email .fa {
  margin-right: 10px;
}
.input-footer {
  position: relative;
}
.input-footer input {
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
.input-footer input:focus-visible {
  outline: none !important;
}
.btn-register-email--footer {
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
.hotline-footer {
  display: flex;
  align-items: center;
}
.hotline-footer .fa {
  margin-right: 5px;
}
/* css phần main footer */
.body-footer {
  padding: 40px 0 30px;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
}

/**css main content */
.main-content {
  position: relative;
  z-index: 999;
}
.title-top-seller {
  padding: 50px 0;
  text-align: center;
}
.row-content {
  margin-right: -15px;
  margin-left: -15px;
}
.pro-loop {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  background: #fff;
  margin-bottom: 10px;
}
.pro-loop .product-img {
  text-align: center;
  position: relative;
  overflow: hidden;
}
.pro-loop .product-detail {
  padding: 20px 0;
}
.product-detail .box-pro-detail {
  text-align: center;
  width: 100%;
  z-index: 9;
}
.pro-loop .product-detail h3 {
  margin: 0 0 5px;
  font-size: 14px;
  position: relative;
}
p.pro-price.highlight {
  color: #f94c43;
  font-weight: bold;
  text-decoration: none;
}
.flex {
  display: flex !important;
}
.wrap {
  flex-flow: wrap;
}
.col-md-3 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
}
a {
  color: #252a2b;
  text-decoration: none;
  outline: none;
}
a:hover,
a:focus {
  color: #6c6c70;
  text-decoration: none;
  outline: none;
}

.pro-loop .product-img picture {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
.div-variant {
  flex-wrap: wrap;
  display: flex;
  display: -moz-flex;
  display: -o-flex;
  width: 100%;
  position: absolute;
  bottom: -100%;
  z-index: 999;
  background: white;
  padding: 10px 0 0;
  transition: all 0.6s ease-in-out 0s;
  -moz-transition: all 0.6s ease-in-out 0s;
  -o-transition: all 0.6s ease-in-out 0s;
  -webkit-transition: all 0.6s ease-in-out 0s;
  -ms-transition: all 0.6s ease-in-out 0s;
  align-items: center;
  justify-content: center;
}
.div-variant > span {
  cursor: pointer;
  display: inline-block;
  width: 20%;
}
.product-img:hover .div-variant {
  display: inline;
}

/**Hàng mới về */

.carousel {
  margin: 50px auto;
  padding: 0 70px;
}
.carousel .item {
  min-height: 330px;
  text-align: center;
  overflow: hidden;
}
.carousel .item .img-box {
  height: 160px;
  width: 100%;
  position: relative;
}
.carousel .item img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.carousel .item h4 {
  font-size: 18px;
  margin: 10px 0;
}
.carousel .item .btn {
  color: #333;
  border-radius: 0;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  background: none;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-top: 5px;
  line-height: 16px;
}
.carousel .item .btn:hover,
.carousel .item .btn:focus {
  color: #fff;
  background: #000;
  border-color: #000;
  box-shadow: none;
}
.carousel .item .btn i {
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
}
.carousel .thumb-wrapper {
  text-align: center;
}
.carousel .thumb-content {
  padding: 15px;
}
.carousel .carousel-control {
  height: 100px;
  width: 40px;
  background: none;
  margin: auto 0;
  background: rgba(0, 0, 0, 0.2);
}
.carousel .carousel-control i {
  font-size: 30px;
  position: absolute;
  top: 50%;
  display: inline-block;
  margin: -16px 0 0 0;
  z-index: 5;
  left: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  font-weight: bold;
}
.carousel .item-price {
  font-size: 13px;
  padding: 2px 0;
}
.carousel .item-price strike {
  color: #999;
  margin-right: 5px;
}
.carousel .item-price span {
  color: #86bd57;
  font-size: 110%;
}
.carousel .carousel-control.left i {
  margin-left: -3px;
}
.carousel .carousel-control.left i {
  margin-right: -3px;
}
.carousel .carousel-indicators {
  bottom: -50px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 50%;
  border-color: transparent;
}
.carousel-indicators li {
  background: rgba(0, 0, 0, 0.2);
}
.carousel-indicators li.active {
  background: rgba(0, 0, 0, 0.6);
}
</style>