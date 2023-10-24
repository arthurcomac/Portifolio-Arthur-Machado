export function About () {
  
  return (
    <div className="w-full md:flex md:justify-evenly m-0 animate-slide-down">
      <img
        src="../../images/imagemDeArthur.png"
        alt="imagem de arthur"
        className="w-full md:w-1/3 md:h-auto rounded-3xl"
      />
      <p className="md:w-1/3 font-roboto dark:text-slate-100 text-lg mt-4 md:mt-10">
        <strong className="text-8xl">Olá</strong>
        meu nome é Arthur Machado.
        Venha comigo dar um passeio pela minha jornada Dev!
        {/* Venho trabalhando em projetos pessoais como este que está acessando agora,
        este site de apresentação ainda está em processo de desenvolvimento, irei adaptar aqui funcionabilidades
        que eu aprender com intuito de apresentar por este, estas hard skills.
        Estarei sempre disposto a uma conversa caso queira conhecer melhor o que venho fazendo e aprendendo.
        Hoje estudo programação junto a <a href="https://app.rocketseat.com.br/dashboard" target={"_blank"} className="underline hover:text-sky-600 text-sky-900 dark:text-sky-600 dark:hover:text-sky-900">Rocketseat</a>, 
        atualmente estou cursando ReactJs na trilha ignite,
        e estudo inglês na <a href="https://englishbackstage.fluencyacademy.io/products/english-backstage-prep-yourself/categories/2150281358/posts/2157877229"  target={"_blank"} className="underline hover:text-sky-600 text-sky-900 dark:text-sky-600 dark:hover:text-sky-900">Fluency Academy</a>
        , onde faço aulas de conversação na plataforma Yowza.
        Algumas das tecnologias que venho utilizando são: ReactJs, Tailwindcss, Vite. Pode me contatar pelos
        links no topo da pagina, obrigado pela visita! */}
      </p>
    </div>
  )
}