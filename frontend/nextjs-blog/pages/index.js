import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Renan Nardi</title>
        <meta name="description" content="Renan Nardi" />
        <link rel="icon" href="https://renan0eng.github.io/Site-Analise-De-Solo/img/favicon.ico" />
      </Head>
      <header>
        <h1>Bem-vindo a minha página pessoal</h1>

        {/* icom seta para baixo  */}

        <img src="https://renan0eng.github.io/Site-Analise-De-Solo/img/Renan.jpeg" />
        <h1>Renan Nardi</h1>

      </header>
      <main>
        <span>
          <section class="fade-in" id="vs"></section>
          <section id="habilidades">
            <h2>Habilidades</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </section>
        </span>
        <span>
          <section id="sobre-mim">
            <h2>Sobre mim</h2>
            <p>Olá, eu sou fulano e sou apaixonado por tecnologia e programação. Eu tenho X anos de experiência em Y e sou especialista em Z. Além disso, gosto de passar meu tempo livre praticando esportes e viajando.</p>
          </section>
          <section id="vs"></section>
        </span>
        <span>
          <section id="vs"></section>
          <section id="projetos">
            <h2>Projetos</h2>
            <ul>
              <li><a href='https://github.com/Renan0eng/Site-Analise-De-Solo'></a></li>
              <li>Projeto 2</li>
              <li>Projeto 3</li>
            </ul>
          </section>
        </span>
        <span>
          <section id="contato">
            <h2>Contato</h2>
            <p>Você pode entrar em contato comigo através do email <a href="mailto:fulano@email.com">fulano@email.com</a> ou pelo telefone (xx) xxxx-xxxx.</p>
          </section>
          <section id="vs"></section>
        </span>
      </main>
      <footer>
        <p>Copyright &copy; 2023 Página Pessoal </p><p id='RenanNardi'>Renan Nardi</p>
      </footer>

      <style jsx>{`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #000;
    width: 100%;
    height: 2000px;
    text-align: center;
  }

  header h1 {
    padding-top: 40px;
    color: #00f;
    margin: 0;
    font-size: 36px;
    text-shadow: 0 0 30px #0000ff;
  }

  img {
    border-radius: 50%;
    border: 10px solid #0000ff;
    padding: 10px;
    width: 300px;
    height: 300px;
    animation: neon-border 1s ease-in-out infinite alternate;
    margin-top: 1000px;
  }

  @keyframes neon-border {
    to {
      border-color: #0000ff;
      box-shadow: 0 0 10px #0000ff, 0 0 20px #0000ff, 0 0 30px #0000ff
    }
  }

  .fade-in {
    animation: fade-in-right 1s ease-in-out forwards;
    opacity: 0;
    transform: translateX(50px);
  }

  @keyframes fade-in-right {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  main {
    padding: 20px;
    background-color: #000;
  }

  section {
    margin-bottom: 20px;
    width: 50%;
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    border: 5px solid #0000ff;
    border-radius: 70px 0px 70px 0px;
    animation: neon-border 1s ease-in-out infinite alternate;
  }

  section p {
    color: #000;
  }

  section h2 {
    color: #0078d4;
    font-size: 24px;
    margin: 0;
  }
  span section li {
    margin: 0px;
    color: #0078d4;
    font-size: 20px;
    align-self: center;
  }

  #vs {
    border: 0 ;
    animation: none;
    background-color: #000;
  }

  span {animation: fade-in-right 1s ease-in-out forwards;
    opacity: 0;
    transform: translateX(400px);
    margin-bottom: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  footer {
    background-color: #111;
    padding: 10px;
    text-align: center;
    flex-direction: row;
  }

  footer p {
    color: #ccc;
    font-size: 14px;
    margin: 0;
  }

  #RenanNardi {
    color: #0078d4;
    font-size: 14px;
    margin: 0;
  }
`}</style>



      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
