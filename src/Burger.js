import "./Burger.css"
import {useEffect, useState} from "react";
const Burger=()=>{

    const [top,setTop]=useState("top");
    const [center,setCenter]=useState("center");
    const [bot,setBot]=useState("bot");
    const [clicked,setClicked]=useState(false);
    const click=()=>{
        setClicked(!clicked);
    }
    useEffect(()=>{
        if(clicked){
            setTop("lineTop")
            setCenter("lineCenter")
            setBot("lineBot")
        }
        else{
            setTop("top")
            setCenter("center")
            setBot("bot")
        }
    },[clicked])
    return(
        <div className={"wrap"}>
            <div className={"lineWrap"} onClick={click}>
                <div className={top}></div>
                <div className={center}></div>
                <div className={bot}></div>
            </div>

        </div>
    )
}
export default Burger