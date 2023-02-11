import NavBar from "./NavBar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Corpo(){
    return (
<>
    
        <NavBar />
      
    <div className="barra-e-stories">
        
        <Stories/>
        <Posts/>
    
      <div className="segue-vc">
        <Sidebar/>
        </div>
    </div>
</>
    );
}