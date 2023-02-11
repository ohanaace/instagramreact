import {postagem} from "./postagem";
import Post from "./Post";

export default function Posts(){  
  return (

<div className="instagram">
      {postagem.map((p) => <Post autor = {p.autor}
      fotoDePerfil = {p.fotoDePerfil}
      foto = {p.foto}
      quemCurtiu = {p.quemCurtiu}
      quemCurtiuFoto = {p.quemCurtiuFoto}
      quantosCurtiram = {p.quantosCurtiram}
      descricao = {p.descricao}
      quantosComentarios = {p.quantosComentarios}
      quemComentou = {p.quemComentou}
      comentario = {p.comentario}
      key = {p.autor}
      />)}


    </div>
    );
}

