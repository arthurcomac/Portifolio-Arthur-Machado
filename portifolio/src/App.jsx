import { NavBar } from './components/NavBar'
import { About } from './sections/About'
import { ImageSection } from './sections/ImageSection'
import { Apresentation } from './sections/Apresentation'
import { Skills } from './sections/Skills'
import { AiFillDatabase, AiFillHome, AiFillRead } from 'react-icons/ai'

function App() {

  const slides = [
    {
      image: <AiFillDatabase />,
      title: "Desenvolvimento Front-end",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },
    {
      image: <AiFillRead />,
      title: "Habilidades comportamentais",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },
    {
      image: <AiFillHome />,
      title: "Testando carrossel",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },
  ];

  return (
    <div>
      <NavBar />
      <About />
      <ImageSection />
      <Apresentation />
      <Skills slides={slides}/>
    </div>
  )
}

export default App
