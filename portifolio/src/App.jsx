import { NavBar } from './components/NavBar'
import { About } from './sections/About'
import { ImageSection } from './sections/ImageSection'
import { Apresentation } from './sections/Apresentation'
import { Skills } from './sections/Skills'

function App() {

  return (
    <div>
      <NavBar />
      <About />
      <ImageSection />
      <Apresentation />
      <Skills />
    </div>
  )
}

export default App
