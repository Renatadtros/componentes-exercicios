import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo";

export default function App() {
  //const titulo = "Título do vídeo";

  const infoUsuario1 = {
    avatar: "https://img.freepik.com/vetores-premium/avatar-de-uma-mulher-ruiva-retrato-de-uma-jovem-ilustracao-em-vetor-de-um-rosto_217290-223.jpg?w=826",
    nome: "Renata Detros"
  }

  const infoUsuario2 = {
    avatar: "https://img.freepik.com/fotos-premium/adolescente-asiatico-3d-engracado-com-estilo-manga_183364-78790.jpg?w=740",
    nome: "Jhon Theylor"
  }

  const infoUsuario3 = {
    avatar: "https://img.freepik.com/fotos-premium/engracado-personagem-infantil-feminino-e-jovem-em-um-fundo-de-cor-clara-generative-ai_58409-29630.jpg?w=1380",
    nome: "Larinha"
  } 

  const infoVideo1 = {
    titulo: "Vídeo 1",
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: infoUsuario2
  };

  const infoVideo2 = {
    titulo: "Vídeo 2",
    imagem: "https://picsum.photos/400/400?a=2",
    usuario: infoUsuario1
  };

  const infoVideo3 = {
    titulo: "Vídeo 3",
    imagem: "https://picsum.photos/400/400?a=3",
    usuario: infoUsuario3
  };

  const infoVideo4 = {
    titulo: "Vídeo 4",
    imagem: "https://picsum.photos/400/400?a=4",
    usuario: infoUsuario3
  };

  const infoVideo5 = {
    titulo: "Vídeo 5",
    imagem: "https://picsum.photos/400/400?a=5",
    usuario: infoUsuario2
  };

  const infoVideo6 = {
    titulo: "Vídeo 6",
    imagem: "https://picsum.photos/400/400?a=6",
    usuario: infoUsuario3
  };

  const infoVideo7 = {
    titulo: "Vídeo 7",
    imagem: "https://picsum.photos/400/400?a=7",
    usuario: infoUsuario1
  };

  const infoVideo8 = {
    titulo: "Vídeo 8",
    imagem: "https://picsum.photos/400/400?a=8",
    usuario: infoUsuario2
  };

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">

            <CardVideo video={infoVideo1} />
            <CardVideo video={infoVideo2} />
            <CardVideo video={infoVideo3} />
            <CardVideo video={infoVideo4} />
            <CardVideo video={infoVideo5} />
            <CardVideo video={infoVideo6} />
            <CardVideo video={infoVideo7} />
            <CardVideo video={infoVideo8} />







          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
