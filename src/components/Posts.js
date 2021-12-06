import Post from "./Post"

export default function Posts() {
    return(
        <div class="posts">
            <Lista />
        </div>
    )
}

function Lista() {
    const post = [
        {imagemUsuario: "assets/img/meowed.svg", usuario: "meowed", conteudo:"assets/img/gato-telefone.svg", imagemCurtida:"assets/img/respondeai.svg", usuarioCurtido:"respondeai", numeroCurtidas:"101.523"},
        {imagemUsuario: "assets/img/barked.svg", usuario: "barked", conteudo:"assets/img/dog.svg", imagemCurtida:"assets/img/adorable_animals.svg", usuarioCurtido:"adorable_animals", numeroCurtidas:"99.159"}
    ]
    return (
        <div>
            {post.map(objeto => <Post imagemUsuario={objeto.imagemUsuario} usuario={objeto.usuario} conteudo={objeto.conteudo} imagemCurtida={objeto.imagemCurtida} usuarioCurtido={objeto.usuarioCurtido} numeroCurtidas={objeto.numeroCurtidas} />)}
        </div>
    )
}