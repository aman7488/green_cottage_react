import "./App.css";
import TopSection from "./MyComponents/TopSection";
import About from "./MyComponents/About";
import Menu from "./MyComponents/Menu";
import Chefs from "./MyComponents/Chefs";
import WeekSpecial from "./MyComponents/WeekSpecial";
import Footer from "./MyComponents/Footer";
import TopButton from "./MyComponents/TopButton";
import ContactUs from "./MyComponents/ContactUs";

function App() {
  return (
    <div className="App">
      <TopSection />
      <About />
      <Menu />
      <Chefs />
      <WeekSpecial />
      <ContactUs />
      <TopButton />
      <Footer />
    </div>
  );
}

export default App;
