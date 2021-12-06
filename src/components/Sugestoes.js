import Sugestao from "./Sugestao"

export default function Sugestoes() {
    return(
        <Lista />
    )
}

function Lista() {
    const lista = [
        {imagem:"assets/img/bad.vibes.memes.svg" ,usuario:"bad.vibes.memes" ,razao:"Segue você"},
        {imagem:"assets/img/chibirdart.svg" ,usuario:"chibirdart" ,razao:"Segue você"},
        {imagem:"assets/img/razoesparaacreditar.svg" ,usuario:"razoesparaacreditar" ,razao:"Novo no Instagram"},
        {imagem:"assets/img/adorable_animals.svg" ,usuario:"adorable_animals" ,razao:"Segue você"},
        {imagem:"assets/img/smallcutecats.svg" ,usuario:"smallcutecats" ,razao:"Segue você"}
    ]

    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {lista.map(objeto => <Sugestao imagem={objeto.imagem} usuario={objeto.usuario} razao={objeto.razao} />)}
        </div>
    )
}