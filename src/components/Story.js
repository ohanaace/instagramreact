export default function Story(props){
    return (
    <div>
        <img src={props.foto} className="foto-de-perfil" alt={props.nome}/>
        <img src={props.borda} className="fundo" alt=""/>
        <p>{props.nome}</p>
    </div>
  );
}