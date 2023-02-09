export default function NavBar(){
    return (
        <div class="barra-superior">
        <div class="logotipo">
            <ion-icon name="logo-assets"></ion-icon>
            <img src="./assets/logo.png" />
        </div>
        
        <input type="text" name="input" value="Pesquisar" onfocus="this.value =''"/>
        <div class="simbolo">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
    )
}