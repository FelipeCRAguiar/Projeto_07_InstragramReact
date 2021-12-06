import Story from "./Story"

export default function Stories() {
    return (
        <div class="stories">
            <Lista />
        </div>
    )
}

function Lista() {
    const stories = [{usuario: "9gag",imagem: "assets/img/9gag.svg" },{usuario: "meowed",imagem:"assets/img/meowed.svg" },{usuario: "barked",imagem:"assets/img/barked.svg" },{usuario: "nathanwpylestrangeplanet",imagem:"assets/img/nathanwpylestrangeplanet.svg" },{usuario: "wawawicomics",imagem:"assets/img/wawawicomics.svg" },{usuario: "respondeai",imagem: "assets/img/respondeai.svg"},{usuario: "filomoderna",imagem:"assets/img/filomoderna.svg" },{usuario:"memeriagourmet" ,imagem:"assets/img/memeriagourmet.svg" }]
    return(
        <div>
            {stories.map(objeto => <Story imagem={objeto.imagem} usuario={objeto.usuario} />)}
        </div>
    );
}