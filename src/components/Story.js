export default function Story(props){
    return (
    <div>
        <img src={props.foto} class="foto-de-perfil" alt={props.nome}/>
        <img src={props.borda} class="fundo" alt=""/>
        <p>{props.nome}</p>
    </div>
  )
   
}