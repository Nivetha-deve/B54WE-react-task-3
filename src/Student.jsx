/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
function Student( {image,name,description} ){
    return(
        <div className={Styles["main4"]}>
             <img src={image} alt={name} className={Styles["stud-img"]} />
         <div className={Styles["stud-details"]}>
        <h3 className={Styles["stud-name"]}>{name}</h3>
        <p className={Styles["stud-desc"]}>{description}</p>
        </div>
    </div>
    )
}
export default Student;

Student.proptype = {
    name:PropTypes.string,
    description:PropTypes.string,
    image:PropTypes.string,
}