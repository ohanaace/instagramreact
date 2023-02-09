export default function Posts(){
    return (

<div class="instagram">

    <div class="postagens">
          <div class="feed">
            <div class="autor">
              <div class="recomendado">
                <img src="./assets/Wednesday.jpg" class="figurante" />
                <div class="info">
                  <p class="username">Wandinha</p>
                </div>
              </div>
              <div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
            <img src="./assets/QuartaFeira.jpg" class="post" />
            <div class="option">
              <div class="reaction">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div class="reaction">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>
            <div class="curtido">
              <img class="quem-curtiu" src="./assets/Mãozinha.jpg" />
              <p>
                Curtido por <span class="username">Mãozinha</span>e <span class="username"> outras 1.349.507 pessoas </span>
              </p>
            </div>
            <div class="caixa-de-comentarios">
              <p><span class="username">Wandinha</span> Eles nem derramaram sangue de porco de verdade</p>
              <p class="nome">Ver todos os 17.340 comentários</p>
              <div class="comment">
              <p><span class="username">Enid</span> Você PROVOU?!?!?!?!?!?</p> <ion-icon name="heart-outline" class="like"></ion-icon>
            </div>
            <div class="adicione-comentario">
            <input type="text" name="input" value="Adicione um comentário..." onfocus="this.value =''"/><button> Publicar</button>
            </div>  
          </div>
          </div>
          <div class="feed">
          <div class="autor">
              <div class="recomendado">
              <img src="./assets/Enid.jpg" class="figurante" />
              <div class="info">
                  <p class="username">Enid</p>
              </div>
              </div>
              <div>
              <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
          </div>
          <img src="./assets/Wenid.jpg" class="post" />
          <div class="option">
              <div class="reaction">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div class="reaction">
              <ion-icon name="bookmark-outline"></ion-icon>
              </div>
          </div>
          <div class="curtido">
              <img class="quem-curtiu" src="./assets/Mãozinha.jpg" />
              <p>
              Curtido por <span class="username">Morticia</span>e <span class="username"> outras 1.274.516 pessoas </span></p>
          </div>
          <div class="caixa-de-comentarios">
              <p><span class="username">Enid</span> Dos mesmos criadores de "Eu sou alérgica a cores" 🏳️‍🌈</p>
              <p class="nome">Ver todos os 179.804 comentários</p>
              <div class="comment">
              <p><span class="username">Wandinha</span> Eu vou te dar 13 segundos para apagar isso.</p> <ion-icon name="heart-outline" class="like"></ion-icon>
          </div>
          <div class="adicione-comentario">
          <input type="text" name="input" value="Adicione um comentário..." onfocus="this.value =''"/><button> Publicar</button>
          </div>  
          </div>
          </div>
      <div class="feed">
          <div class="autor">
            <div class="recomendado">
              <img src="./assets/Morticia.jpg" class="figurante" />
              <div class="info">
                <p class="username">Morticia</p>
              </div>
            </div>
            <div>
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <img src="./assets/Morticia-e-Wandinha.jpg" class="post" />
          <div class="option">
            <div class="reaction">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="reaction">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div class="curtido">
            <img class="quem-curtiu" src="./assets/Gomez.jpg" />
            <p>
              Curtido por <span class="username">Gómez</span>e <span class="username"> outras 13.315 pessoas </span>
            </p>
          </div>
          <div class="caixa-de-comentarios">
            <p><span class="username">Morticia</span> Eu sempre estarei aqui para você 🖤</p>
            <p class="nome">Ver todos os 9.804 comentários</p>
            <div class="comment">
            <p><span class="username">Enid</span> Nossa, vcs duas são igualzinhas...</p> <ion-icon name="heart-outline" class="like"></ion-icon>
          </div>
          <div class="adicione-comentario">
          <input type="text" name="input" value="Adicione um comentário..." onfocus="this.value =''"/><button> Publicar</button>
          </div>  
        </div>
    </div>

    </div>
</div>
    )
}