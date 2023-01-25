import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export function NavBar() {

  const instagram = `https://www.instagram.com/arthur.c.machado/`
  const github = `https://github.com/arthurcomac`
  const linkedin = `https://www.linkedin.com/in/arthur-machado-a72411219/`
  
  return <div className="w-full h-24 text-[#7956e8] text-6xl flex items-center justify-center space-x-10">
    <a href={instagram} target="blank"><BsInstagram /></a>
    <a href={github} target="blank"><BsGithub /></a>
    <a href={linkedin} target="blank"><BsLinkedin /></a>
  </div>
}