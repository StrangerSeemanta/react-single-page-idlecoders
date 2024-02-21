import { Fragment } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App