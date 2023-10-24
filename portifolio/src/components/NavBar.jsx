import { BsInstagram, BsGithub, BsLinkedin, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '../hooks/useTheme'

export function NavBar() {

  const { theme, setTheme } = useTheme()

  const instagram = `https://www.instagram.com/arthur.c.machado/`
  const github = `https://github.com/arthurcomac`
  const linkedin = `https://www.linkedin.com/in/arthur-machado-a72411219/`
  
  return (
    <div className="flex-col md:flex w-full h-24 text-[#7956e8] dark:text-slate-200 items-center justify-center md:relative mb-10">

      <div className=" text-6xl flex space-x-10 items-center justify-center mt-4">
        <a href={instagram} className='hover:text-7xl duration-300' target="blank"><BsInstagram /></a>
        <a href={github} className='hover:text-7xl duration-300' target="blank"><BsGithub /></a>
        <a href={linkedin} className='hover:text-7xl duration-300' target="blank"><BsLinkedin /></a>
      </div>

      <div className='md:absolute md:ml-[75%] flex items-center justify-center mt-4 text-3xl duration-300 hover:text-4xl'>

        { 
          theme === "ligth"
            ? <BsFillMoonStarsFill onClick={() => setTheme("dark")} /> 
              : <BsFillSunFill onClick={() => setTheme("ligth")} />
        }

      </div>
    </div>
  )
}