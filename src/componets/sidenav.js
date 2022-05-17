
export default function Sidenav(props){
    return(
        <div className="Edu">
         <img src="https://th.bing.com/th/id/OIP.4OPYEka5fTWQ3-d7DiOPpwHaD6?w=314&h=180&c=7&r=0&o=5&pid=1.7"></img>
        <h2 onClick={()=>{props.actionclick("menu")}}>MENU</h2>
        <h2 onClick={()=>{props.actionclick("About")}}>About</h2>
        <h2 onClick={()=>{props.actionclick("Education")}}>EDUCATION</h2>
        <h2 onClick={()=>{props.actionclick("SKILLS")}}> SKILLS</h2>
    </div>

    )

}