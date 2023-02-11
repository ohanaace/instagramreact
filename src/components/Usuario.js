import { useState } from "react";

export default function  Usuario(){
  const fotoBase = "https://pbs.twimg.com/profile_images/1529535527585583104/Y7wqhrcM_400x400.png";
  const [logIn, setLogin] = useState("Wednesday_Addams");
  const [profile, setProfile] = useState(fotoBase);
 
  function logar(){
    const novoLogIn = prompt("Digite o novo nome de usuário");
    if(!novoLogIn) return;
    setLogin(novoLogIn);
  } 
  function mudarProfile(){
    const novoProfile = prompt("Insira o link da nova foto de perfil");
    if(!novoProfile) return;
    setProfile(novoProfile);
  }
    return (
    <div className="usuario">
        <div className="meu-perfil">
          <img
            className="foto-de-perfil"
            src={profile}
            onClick={mudarProfile}
            data-test="profile-image"/>
          
        </div>
    
        <div className="informacao">
          <p className="username" data-test="name" >{logIn} </p>
          <ion-icon name="pencil" onClick={logar} data-test="edit-name" ></ion-icon>
        </div>
    </div>
    );
}