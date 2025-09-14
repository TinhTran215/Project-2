import "./Styles.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      name: "Ghế Sofa",
      price: "5.000.000",
      image:
        "https://images.unsplash.com/photo-1582582429719-3fdc0fdb6e24?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Bàn Ăn Gỗ",
      price: "3.500.000",
      image:
        "https://images.unsplash.com/photo-1628744874422-c1b8c94d8adc?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Tủ Quần Áo",
      price: "7.200.000",
      image:
        "https://images.unsplash.com/photo-1616628188579-8b38e4e2b938?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div>
      <Header />
      <section className="banner">
        <h2>Nội thất cao cấp cho ngôi nhà của bạn</h2>
        <p>Đem đến sự sang trọng và tiện nghi</p>
      </section>

      <section className="products">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
