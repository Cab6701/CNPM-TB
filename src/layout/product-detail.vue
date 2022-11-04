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

    <div class="product-detail-content">
      <div class="container-fluid">
        <div class="row-head breadcrumb-shop">
          <div class="url-detail">
            <ol class="breadcrumb breadcrumb-arrows">
              <li>
                <a href="#">Trang chủ</a>
              </li>
              &nbsp;/&nbsp;
              <li>
                <a href="#">Sản phẩm quần áo nam thời trang nam mới nhất</a>
              </li>
              &nbsp;/&nbsp;
              <li>
                <a href="#">Sản phẩm</a>
              </li>
              &nbsp;/&nbsp;
              <li>
                <a href="#">Thời Trang Nam</a>
              </li>
              &nbsp;/&nbsp;
              <li>
                <a href="#">Áo</a>
              </li>
              &nbsp;/&nbsp;
              <li>
                <a href="#">Áo Polo nam POTTK306</a>
              </li>
            </ol>
          </div>
        </div>
        <div class="row-head product-detail-wrapper flex">
          <div class="url-detail w-50">
            <div class="row-head product-detail-main">
              <div class="flex">
                <!-- <div class="product-gallery__thumbs-container"></div>
                  <div class="product-image-detail">
                    <img
                      src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                      alt=""
                    />
                  </div> -->
                <div
                  id="myCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <!-- Indicators -->
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                    <div class="item active">
                      <img
                        src="../assets/images/product-img/STDTK341-QJDTK310-3.jpg"
                        alt="Los Angeles"
                      />
                    </div>

                    <div class="item">
                      <img
                        src="../assets/images/product-img/STDTK341-QJDTK310-3.jpg"
                        alt="Chicago"
                      />
                    </div>

                    <div class="item">
                      <img
                        src="../assets/images/product-img/STDTK341-QJDTK310-3.jpg"
                        alt="New York"
                      />
                    </div>
                  </div>

                  <!-- Left and right controls -->
                  <a
                    class="left carousel-control"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="right carousel-control"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="url-detail w-50">
            <div class="product-title">
              <h1>Áo sơ mi nam STDTK341</h1>
            </div>
            <div class="product-price">
              <span>399.000<span>₫</span></span>
            </div>
            <form class="product-colorsize">
              <table cellspacing="0" class="variations">
                <tbody>
                  <tr>
                    <td class="label">
                      <label for="">Màu sắc</label>
                    </td>
                    <td class="value">
                      <div class="select swatch-control">
                        <div class="select-option swatch-wrapper">
                          <a
                            href=""
                            style="width: 100px; height: 100px"
                            class="swatch-anchor"
                          >
                            <img
                              src="../assets/images/product-color/STDTK341-QJDTK310-19.jpg"
                              alt=""
                              class="h-60"
                          /></a>
                        </div>
                        <div class="select-option swatch-wrapper">
                          <a
                            href=""
                            style="width: 100px; height: 100px"
                            class="swatch-anchor"
                          >
                            <img
                              src="../assets/images/product-color/STDTK341-QJDTK310-3.jpg"
                              alt=""
                              class="h-60"
                          /></a>
                        </div>
                        <div class="select-option swatch-wrapper">
                          <a
                            href=""
                            style="width: 100px; height: 100px"
                            class="swatch-anchor"
                          >
                            <img
                              src="../assets/images/product-color/STDTK341-QJDTK310-9.jpg"
                              alt=""
                              class="h-60"
                          /></a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="label">
                      <label for="">Kích thước</label>
                    </td>
                    <td class="value">
                      <div class="tawcvs-swatches">
                        <span class="swatch swatch-label swatch-m">M</span>
                      </div>
                      <div class="tawcvs-swatches">
                        <span class="swatch swatch-label swatch-m">L</span>
                      </div>
                      <div class="tawcvs-swatches">
                        <span class="swatch swatch-label swatch-m">XL</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div class="product-quantity">
              <div class="selector-actions">
                <div class="quantity-area clearfix">
                  <input
                    type="button"
                    value="-"
                    class="qty-btn"
                    @click="decreasePro"
                  />
                  <div class="quantity">
                    <input
                      class="input-text qty text"
                      step="1"
                      min="1"
                      max=""
                      name="quantity"
                      v-model="quantity"
                      title="SL"
                      size="4"
                      inputmode="numeric"
                      type="text"
                    />
                    <input
                      type="button"
                      value="+"
                      class="qty-btn"
                      @click="increasePro"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="addcart">
              <button class="button dark btn-addtocart" type="submit">
                <i class="fa fa-shopping-cart"> Thêm vào giỏ Hàng </i>
              </button>
            </div>
            <div class="product-description text-left">
              <div class="title-bl">
                <h2>Mô tả</h2>
              </div>
              <div class="description-content">
                <div class="description-productdetail">
                  <div class="comment-container">
                    <p>
                      – Chất liệu: Nhung tăm<br />
                      – Kiểu dáng: RELAX<br />
                      – Màu sắc: XANH RÊU, NÂU, BE<br />
                      –
                      <strong
                        >Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ
                        thống</strong
                      >
                    </p>
                    <h2>HƯỚNG DẪN CHỌN SIZE</h2>
                    <p>
                      Size M: 50-57kg / Cao 1m53 – 1m68<br />
                      Size L: 58-64kg / Cao 1m57 – 1m70<br />
                      Size XL: 65-70kg / Cao 1m66 – 1m76<br />
                      Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm
                      1 size, chỉ số trên là tương đối mặc
                    </p>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="top-seller">
        <div class="title-top-seller">
          <div class="container-fluid">
            <h2 class="s-37">SẢN PHẨM LIÊN QUAN</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
        <!-- <div class="test">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              <div class="item active">
                <a href="google.com">
                  <img
                    src="../assets/images/product-img/POTTK316-QJDTK302-1-1-400x600.jpg"
                    alt="Los Angeles"
                  />
                </a>
                <a href="google.com">
                  <img
                    src="../assets/images/product-img/POTTK316-QJDTK302-1-1-400x600.jpg"
                    alt="Los Angeles"
                  />
                </a>
                <a href="google.com">
                  <img
                    src="../assets/images/product-img/POTTK316-QJDTK302-1-1-400x600.jpg"
                    alt="Los Angeles"
                  />
                </a>
              </div>

              <div class="item">
                <img
                  src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                  alt="Chicago"
                />
                <img
                  src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                  alt="Chicago"
                />
                <img
                  src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                  alt="Chicago"
                />
              </div>

              <div class="item">
                <img
                  src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                  alt="New York"
                />
                <img
                  src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                  alt="New York"
                />
                <img
                  src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                  alt="New York"
                />
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div> -->
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
import Slick from "vue-slick";
export default {
  name: "MainLayout",
  components: [Slick],
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
      },
      quantity: 1,
    };
  },
  methods: {
    increasePro() {
      this.quantity += 1;
    },
    decreasePro() {
      if (this.quantity == 1) return;
      else this.quantity -= 1;
    },
  },
};
</script>
    
    <style scoped>
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
  font-size: 15px;
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
  /* position: fixed;
        bottom: 0;
        left: 0; */
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
  font-size: 15px;
}
.title-email .fa {
  margin-right: 10px;
}
.input-footer {
  position: relative;
}
.input-footer input {
  font-size: 15px;
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
  font-size: 15px;
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

/* CSS Phần chi tiết sản phẩm */
.breadcrumb-shop .breadcrumb-arrows {
  padding: 10px 0;
  background: transparent;
  border-radius: 0;
  margin: 0;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
.url-detail {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.breadcrumb-shop {
  background: #f5f5f5;
}
.row-head {
  margin-right: -15px;
  margin-left: -15px;
}
.carousel-inner > .active {
  display: flex !important;
}
.flex {
  display: flex !important;
}
a {
  font-size: 13px;
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
.product-detail-wrapper {
  padding: 30px 0;
}
.product-detail-main {
  margin-bottom: 40px;
}
.product-gallery__thumbs-container {
  margin-right: 10px;
  max-height: 825px;
  overflow: hidden;
  width: 9%;
}
.product-image-detail {
  width: 91%;
  padding-left: 10px;
  position: relative;
}
.product-detail-main {
  margin-bottom: 40px;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
.w-50 {
  width: 50% !important;
}
.product-title {
  padding: 0 0 10px;
  border-bottom: 1px dotted #dfe0e1;
  text-align: left;
}
.product-title h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 5px;
  line-height: initial;
}
.product-price {
  padding: 10px 0;
  border-bottom: 1px dotted #dfe0e1;
  font-size: 18px;
  color: #f94c43;
  font-weight: bold;
  text-decoration: none;
  text-align: left;
}
table {
  width: 100%;
  border-spacing: 0;
  background-color: transparent;
  border-collapse: collapse;
}
table tr td,
table tr th {
  padding: 10px;
  text-align: left;
}
table tr td {
  border-top: 1px solid #dddddd;
}
td,
th {
  padding: 0;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
.label {
  width: 170px;
  color: #252a2b;
}
label {
  font-size: 14px;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.tawcvs-swatches .swatch-label {
  font-size: 14px;
  background-color: #f1f1f1;
}
.tawcvs-swatches .swatch {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  white-space: nowrap;
}
.tawcvs-swatches .swatch-label {
  border-radius: 0 !important;
  width: auto !important;
  min-width: 30px;
}
.swatch {
  width: 100%;
  float: left;
  border-bottom: 1px dotted #dfe0e1;
}
.swatch-control {
  overflow: hidden;
}
.swatch-wrapper {
  padding: 2px;
  background: #fff;
  border: 1px solid #ccc;
  float: left;
  margin: 0 5px 5px 0;
  border: none;
}
.swatch-wrapper a {
  display: block;
}
.swatch-anchor {
  max-height: 50px;
  max-width: 40px;
}
.h-60 {
  height: 60px !important;
}
.carousel {
  width: 100%;
}
.selector-actions {
  width: 100%;
  float: left;
  margin-top: 15px;
}
.quantity-area {
  margin-bottom: 15px;
}
.quantity-area input.qty-btn {
  float: left;
  background: #f5f5f5;
  border: solid 1px #f5f5f5;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 0;
}
.quantity-area input#quantity,
.quantity-area input.qty {
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  height: 32px;
  padding: 0;
  text-align: center;
  width: 70px;
  border: 1px solid #f5f5f5;
  border-left: none;
  border-right: none;
  border-radius: 1px;
  float: left;
  -webkit-appearance: none;
  color: #000;
}
.button.dark {
  color: #fff;
  border-color: #000;
}
button.btn-addtocart {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: none;
  padding: 14px 35px;
  line-height: 22px;
  width: 100%;
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
  -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  color: #252a2b;
  overflow: hidden;
}
/* .button.dark:hover {
    color: #252a2b;
} */
.button.dark:before {
  background-color: #000;
}
.button:before {
  position: absolute;
  content: "";
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
  -webkit-transition: -webkit-transform 0.45s
    cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.product-description {
  margin: 20px 0;
}
p {
    margin: 0 0 10px 0;
    line-height: 21px;
    font-size: 14px;
}
.product-description .title-bl h2, .product-description h2, .product-description h3 {
    font-size: 14px;
    font-weight: 700;
}
.text-left{
  text-align: left;
}
h1, h2, h3, h4, h5, h6 {
    color: #252a2b;
    margin: 0 0 13px 0;
    font-weight: 500;
    line-height: 1.2;
}

/*Sản phẩm liên quan*/
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
.s-37{
  font-size: 37px;
}
</style>