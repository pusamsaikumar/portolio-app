import React,{useContext} from "react";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";

function App() {
const theme=useContext(ThemeContext)
const darkMode=theme.state.darkMode;

  return (
    <div style={
      {backgroundColor: darkMode ? "skyblue" : "orange",
      color: darkMode && 'white'
      }}>
      <Toggle />
      <Intro/>
      <About />
      <ProductList />
      <Contact/>
      
    </div>
  );
}

export default App;
