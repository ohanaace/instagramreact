export default function Stories(){
    const users = [
        {nome: "Wandinha", foto: "./assets/Wednesday.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Enid", foto: "./assets/Enid.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Morticia", foto: "./assets/Morticia.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Gomez", foto: "./assets/Gomez.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Feioso", foto: "./assets/Feioso.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Mãozinha", foto: "./assets/Mãozinha.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Bianca", foto: "./assets/Bianca.jpg", borda:"./assets/stories_background.jpg"},
        {nome: "Thornhill", foto: "./assets/Thornhill.jpg", borda:"./assets/stories_background.jpg"}
    ]
   
    return (
    <div class="caixa-de-stories">
        {users.map((p) => <Story nome={p.nome} foto={p.foto}  borda={p.borda}/>)}
        <div class="seta">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
}

function Story(props){
    return (
    <div>
        <img src={props.foto} class="foto-de-perfil" alt={props.nome}/>
        <img src={props.borda} class="fundo" alt=""/>
        <p>{props.nome}</p>
    </div>
  )
   
}

