import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  // /**
  //  * Adding following gradient
  //  */
  // const appRef = useRef(HTMLDivElement);
  // useEffect(() => {
  //   const updateMousePosition = (e) => {
  //     if (!appRef.current) return;

  //     appRef.current.style.setProperty("--x", `${e.clientX}px`);
  //     appRef.current.style.setProperty("--y", `${e.clientY}px`);
  //   };
  //   window.addEventListener("mousemove", updateMousePosition);
  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);
  // This goes to the .App div
  // ref={appRef}

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App container-fluid">
      <Header />
      <div className="BackToTopContainer">
        {scrollTop > 300 ? <BackToTop /> : <div></div>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
