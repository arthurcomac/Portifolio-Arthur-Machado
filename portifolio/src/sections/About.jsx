export function About () {
  
  return (
    <div className="w-full md:flex md:justify-evenly m-0 animate-slide-down">
      <img
        src="../../images/arthurDesenho.jpg"
        alt="imagem de arthur"
        className="w-full md:w-1/3 md:h-auto rounded-3xl"
      />
      <p className="md:w-1/3 font-roboto dark:text-slate-100 text-lg mt-4 md:mt-10">
        <strong className="text-8xl">Olá</strong>
        meu nome é Arthur Machado.
        Venha comigo dar um passeio pela minha jornada Dev!
      </p>  
    </div>
  )
}