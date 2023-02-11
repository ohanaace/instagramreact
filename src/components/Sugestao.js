export default function Sugestao(props){
    return (
    <div className="indicacao">
      <div className="recomendado">
        <img
          src={props.foto}
          className="figurante"
          alt={props.nome}
        />
        <div className="info">
          <p className="username">{props.nome}</p>
          <p className="nome">{props.info}</p>
        </div>
      </div>
      <div className="azul">
        {props.seguir}
      </div>
    </div>);
    }