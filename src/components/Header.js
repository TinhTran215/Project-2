function Header() {
  return (
    <header>
        <div className="logoSearch">
            <div className="logo">
                <h1>Nội thất </h1>
                <p>Rẻ-Sang-Bền</p>
            </div>
            <form className="inputForm" action="">
                <input type="text" value="" placeholder="Tìm kiếm sản phẩm..."/>
                <button>Tìm kiếm</button>
            </form>
            <div className="UserAcout">
                <a href="/">Đăng nhập</a> / <a href="/">Đăng ký</a>
            </div>
        </div>
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">Design</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    </header>
  );
}

export default Header;
