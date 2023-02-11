import {useState} from "react";

export default function Post(props){
  const padraoLike = <ion-icon name="heart-outline"></ion-icon>;
  const [like, setLike] = useState(padraoLike);
  const [heart, setHeart] = useState(false);
  const [fans, setFans] = useState(props.quantosCurtiram)
  const padraoSave = <ion-icon name="bookmark-outline"></ion-icon>;
  const [save, setSave] = useState(padraoSave);
  const [mark, setMark] = useState(false);

  function curtir(){
    if(heart === true){
      setHeart(false);
      setLike(padraoLike);
      setFans(props.quantosCurtiram);
      return;
    }
   const curtiu = <ion-icon name="heart"></ion-icon>;
   setLike(curtiu);
   setFans(fans + 1);
   setHeart(true);
  }
  function curtirPelaFoto(){
    if(heart === true) {
      return;
    }
    const curtiu = <ion-icon name="heart"></ion-icon>;
    setLike(curtiu);
    setFans(fans + 1);
    setHeart(true);
  }
  function salvar(){
    if(mark === true) {
      setMark(false);
      setSave(padraoSave);
      return;
    }
   const salvou = <ion-icon name="bookmark"></ion-icon>;
   setSave(salvou);
   setMark(true);
  }
    return (
<div className="feed" data-test="post">
      <div className="autor">
        <div className="recomendado">
          <img src={props.fotoDePerfil} className="figurante" alt={props.autor}/>
          <div className="info">
            <p className="username">{props.autor}</p>
          </div>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <img src={props.foto} onDoubleClick={curtirPelaFoto} className="post" data-test="post-image"/>
      <div className="option">
        <div className="reaction">
          <div onClick={curtir} className = {!heart? "" : "vermelho"} data-test="like-post">
            {like}
          </div>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="reaction" onClick={salvar} data-test="save-post">
          {save}
        </div>
      </div>
      <div className="curtido">
        <img className="quem-curtiu" src={props.quemCurtiuFoto} alt= {props.quemCurtiu} />
        <p>
          Curtido por <span className="username">{props.quemCurtiu}</span>e <span className="username" data-test="likes-number">outras {fans} pessoas</span>
        </p>
      </div>
      <div className="caixa-de-comentarios">
        <p><span className="username">{props.autor}</span> {props.descricao}</p>
        <p className="nome">{props.quantosComentarios}</p>
        <div className="comment">
        <p><span className="username">{props.quemComentou}</span> {props.comentario}</p> <ion-icon name="heart-outline" className="like"></ion-icon>
      </div>
      <div className="adicione-comentario">
      <input type="text" name="input" value="Adicione um comentário..." onFocus="this.value =''"/><button> Publicar</button>
      </div>  
    </div>
</div>
    );
  }