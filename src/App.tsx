import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Keyboard from './components/Keyboard'
import Gallery from './components/Gallery'
import FairPlay from './components/FairPlay'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <div className="flex flex-col items-center">
        <Hero />
        <Keyboard />
        <Gallery />
        <FairPlay />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
