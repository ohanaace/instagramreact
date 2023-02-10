import Story from "./Story";
import {users} from "./users";

export default function Stories(){
    return (
    <div class="caixa-de-stories">
        {users.map((p) => <Story nome={p.nome} foto={p.foto}  borda={p.borda}/>)}
        <div class="seta">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
}

