import Sugestao from "./Sugestao";
import {sugeridos} from "./sugeridos";

export default function Sugestoes(){

return (
<div>
    <div class="sugestoes">
 
        <p class="sugerido">Sugestões para você</p>
        <p class="ver-tudo">Ver tudo</p>
      </div>
      {sugeridos.map((p) => <Sugestao nome = {p.nome} foto = {p.foto} info = {p.info} seguir = {p.seguir} />)}

          <div class="aviso-legal">
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
              Termos • Localizações • Contas mais relevantes • Hashtags • 
              Idioma</p>
           <p>© 2021 INSTAGRAM DO FACEBOOK</p>
          </div>
</div>)
}

