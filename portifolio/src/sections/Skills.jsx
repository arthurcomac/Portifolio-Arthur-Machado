import { useState, useEffect } from 'react'
import { AiFillHome, AiFillRead, AiFillDatabase } from 'react-icons/ai'

export function Skills () {

  const sliders = [
    {
      image: <AiFillDatabase className="text-3xl"/>,
      title: "Desenvolvimento Front-end",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },
    {
      image: <AiFillRead className="text-3xl"/>,
      title: "Habilidades comportamentais",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },
    {
      image: <AiFillHome className="text-3xl"/>,
      title: "Testando carrossel",
      paragraph: "Gosto de estar em frente a tela do computador trabalhando em um projeto, isso me envolve a ponto de perder a hora!"
    },  
  ];

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
        <div className="w-[90%] min-h-[20rem]
          text-center
          text-lg"
        >
          <div
            className="flex flex-col items-center"
          >
            <strong>
              {"estamos em manutenção"}
            </strong>
            <p>
              {}
            </p>
          </div>
        </div>
      </div>          
    </div>
  )
}