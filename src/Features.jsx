/* eslint-disable react/prop-types */
import PropType from "prop-types";
import Styles from "./Page.module.css"
function Features ( {icon,name,description}) {
    return (
         <div className={Styles["main-container"]}>
        <i className ={Styles["icons"]}>{icon}</i>
        <h2 className={Styles["name"]}>{name}</h2>
        <p className={Styles["descrip"]}>{description}</p>
         </div>
    )
}

export default Features

Features.PropType = {
    icon: PropType.string,
    name :PropType.string,
    description:PropType.string,
}