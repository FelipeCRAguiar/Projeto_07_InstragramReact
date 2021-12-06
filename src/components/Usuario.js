export default function Usuario(props) {
    return(
    <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
            <strong>{props.user}</strong>
            {props.username}
        </div>
    </div>
    )
}