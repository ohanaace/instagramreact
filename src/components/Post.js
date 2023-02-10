export default function Post(props){
    return (
      <div class="feed">
      <div class="autor">
        <div class="recomendado">
          <img src={props.fotoDePerfil} class="figurante" alt={props.autor}/>
          <div class="info">
            <p class="username">{props.autor}</p>
          </div>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <img src={props.foto} class="post" />
      <div class="option">
        <div class="reaction">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class="reaction">
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div class="curtido">
        <img class="quem-curtiu" src={props.quemCurtiuFoto} alt= {props.quemCurtiu} />
        <p>
          Curtido por <span class="username">{props.quemCurtiu}</span>e <span class="username">{props.quantosCurtiram}</span>
        </p>
      </div>
      <div class="caixa-de-comentarios">
        <p><span class="username">{props.autor}</span> {props.descricao}</p>
        <p class="nome">{props.quantosComentarios}</p>
        <div class="comment">
        <p><span class="username">{props.quemComentou}</span> {props.comentario}</p> <ion-icon name="heart-outline" class="like"></ion-icon>
      </div>
      <div class="adicione-comentario">
      <input type="text" name="input" value="Adicione um comentário..." onfocus="this.value =''"/><button> Publicar</button>
      </div>  
    </div>
    </div>
    )
  }