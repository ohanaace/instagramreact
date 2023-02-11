import Story from "./Story";
import {users} from "./users";

export default function Stories(){
    return (
    <div className="caixa-de-stories">
        {users.map((p) => <Story nome={p.nome} foto={p.foto} key={p.nome} borda={p.borda}/>)}
        <div className="seta">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}

