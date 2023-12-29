import BatterSection from "./sections/BatterSection";
import CameraSection from "./sections/CameraSection";
import ColorSection from "./sections/ColorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import ProcessorSection from "./sections/ProcessorSection";
import Qoute from "./sections/Qoute";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
     <GlobalStyle />
     <Qoute />
     <PhoneModel />
     <HeroSection />
     <DesignSection />
     <DisplaySection />
     <ProcessorSection />
     <BatterSection />
     <ColorSection />
     <CameraSection />
    </>
  );
}

export default App;
