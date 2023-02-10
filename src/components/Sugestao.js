export default function Sugestao(props){
    return (<div class="indicacao">
      <div class="recomendado">
        <img
          src={props.foto}
          class="figurante"
          alt={props.nome}
        />
        <div class="info">
          <p class="username">{props.nome}</p>
          <p class="nome">{props.info}</p>
        </div>
      </div>
      <div class="azul">
        {props.seguir}
      </div>
    </div>)
    }