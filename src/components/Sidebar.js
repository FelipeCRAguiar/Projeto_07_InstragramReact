import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar() {
    return(
        <div class="sidebar">
            <InformacaoUsuario />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function InformacaoUsuario() {
    const info = ["assets/img/catanacomics.svg","catanacomics","Catana"]

    return(
        <Usuario imagem={info[0]} user={info[1]} username={info[2]} />
    )
}