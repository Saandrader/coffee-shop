
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "./containers/Section1";
import Section2 from "./containers/Section2";
import Section3 from "./containers/Section3";

function Home() {
  return (
    <>
      <Section1 />
      <Section3/>
      <Section2/>
      <Footer />
    </>
  );
}

export default Home;
