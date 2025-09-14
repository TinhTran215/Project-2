import "./Styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImgSlider from "./components/ImgSlider";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Slider */}
      <section>
        <ImgSlider />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
