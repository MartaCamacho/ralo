import React, {useState} from "react";
import Welcome from "../components/Welcome";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function IndexPage() {
  const [language, setLanguage] = useState('spanish');
  
  return (
    <div className="page-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Welcome changeLanguage={setLanguage} language={language}/>
      <Body language={language}/>
      <Footer />
      <div className="footer-element marta-signature-bottom">Made with ♥ by <a href="https://www.linkedin.com/in/martacamachovargas/" rel="noopener noreferrer" target="_blank"><b>Marta</b></a></div>
    </div>
  );
}
