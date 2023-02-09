import NavBar from "./NavBar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Corpo(){
    return (
<div>
    
        <NavBar />
      
    <div class="barra-e-stories">
        
        <Stories/>
        <Posts/>
    
      <div class="segue-vc">
        <Sidebar/>
        </div>
    </div>
</div>
    )
}