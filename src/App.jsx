import "./App.css";
import Equipments from "./Components/Equipments/Equipments";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import bgStyle2 from "./assets/bgimage.png";
function App() {
  const bgStyle = {
    backgroundImage: `url(${bgStyle2})`,
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments></Equipments>
    </div>
  );
}

export default App;
