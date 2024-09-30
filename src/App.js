import "./App.css";
import { Home } from "./components/home/Home";
import { Pages } from "./components/pages/Pages";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (<>
    <Pages />
  </>
  )
}


export default App;