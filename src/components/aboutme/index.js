import React from "react";
import "./aboutme.css";
import Header from "../header/index";

export default class Aboutme extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 id="titulo">Sobre Mim</h1>
        <p id="texto">
          Me Chamo Camilla Tainá Santana dos Santos, tenho 20 anos, moro em Rio
          Doce - Olinda, toco violão e guitarra, gosto muito de ler, ouvir
          música, jogar bola, dançar e me aventurar.
          <br />
          <br />
          Minha História com a área da Tecnologia, é um tanto quanto inesperada,
          mas nada que você não tenha visto antes. No começo do 3º ano do Ensino
          Médio, tive inicio de depressão por não saber lidar com a pressão que
          sentia, porque na minha cabeça eu tinha que tirar uma excelente nota
          no Enem, entrar de primeiro no Curso que eu queria, por achar que eu
          tinha que ser igual aos outros, não podia ficar para trás. Só que nada
          disso aconteceu, cada um tem o seu tempo para que as coisas acontecçam
          em sua vida. Concluir o ensino Médio e fiz o meu primeiro Enem e não
          obtive uma boa nota que daria para passar no Curso que eu queria que
          aliás era o Curso de Arquitetura e Urbanismo. Tentei o Enem por 3 anos
          e sempre insistindo em ingressar em Arquitetura, porém no ano passado
          (2019), estava fazendo um curso preparatorio pro Enem, quando uma
          pessoa colocou no grupo do WhatsApp a inscrição para esse projeto,
          gostei da proposta do curso, mandei pro meu irmão pra ter a opinião
          dele e ele disse vai e se arrisca. <br />
          <br />
          Minha Mãe e meu irmão já estava a um tempo querendo mudar a minha
          opinião em abrir mão do curso que eu queria e experimentar algo que
          estivesse fora da caixa, outras possibilidades de curso e que eu iria
          se sair bem em Programação ou algo voltado a área da tecnologia, mas
          em minha mente eu sempre tive o pensamento de que programação é
          dificil e eu não iria aprender, que eu não era capaz. Contudo graças a
          esse Projeto da Rede Cidadã, tive o meu primeiro contato aprofundado
          com a tecnologia e me encontrei muito na área, não me vejo estudado
          outra coisa.
          <br />
          <br />
          <br />
          <strong id="marca">
            Às vezes a gente só precisa de um impurãozinho para mudar de
            pensamento e uma oportunidade para começar!
          </strong>
        </p>
      </div>
    );
  }
}
