import OurFeatures from "../pages/OurFeatures";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Menu from "./Menu";
import Procedures from "./Procedures";
import WhyDigidish from "./WhyDigiDish";

function Body() {
  return (
    <main className="section-containers">
      <Hero />
      <WhyDigidish />
      <OurFeatures />
      <Procedures />
      <Menu />
      <ContactUs />
    </main>
  );
}

export default Body;
