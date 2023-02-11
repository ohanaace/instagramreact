export default function NavBar(){
    return (
        <div className="barra-superior">
        <div className="logotipo">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="./assets/logo.png" />
        </div>
        
        <input type="text" name="input" value="Pesquisar" />
        <div className="simbolo">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
    );
}