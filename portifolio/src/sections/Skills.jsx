import { AiFillHome, AiFillRead, AiFillDatabase } from 'react-icons/ai'

export function Skills () {
  return (
    <div className="w-full h-[36rem]
      flex items-center flex-col
      bg-white dark:bg-[#082e36]"
    >
      <div className="w-full h-[10rem]
        flex items-center flex-col relative rounded-b-lg
        bg-[#39797b]"
      >
      </div>
      <div className="w-[90%]
        flex justify-center absolute
        rounded-2xl py-6
        bg-white"
      >
        <div className="w-2/3
          text-center lg:flex justify-between
          text-lg space-y-4 lg:space-y-0"
        >
          <div className="flex flex-col items-center"><AiFillDatabase className="text-3xl"/><p>Desenvolvimento Front-end</p></div>
          <div className="flex flex-col items-center"><AiFillHome className="text-3xl" /><p>Valores</p></div>
          <div className="flex flex-col items-center"><AiFillRead className="text-3xl"/><p>Engenharia de software</p></div>
        </div>
      </div>          
    </div>
  )
}