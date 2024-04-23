/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
function Content ( {name,description,image} ) {
    return (
       <div className={Styles["main3"]}>
        <div className={Styles["cont-details"]}>
        <h2 className={Styles["cont-heading"]}>{name}</h2>
        <p className={Styles["cont-desc"]}>{description}</p>
        </div>
        <div
        className={Styles["img-container"]}
      >
        {" "}
        <img src={image} alt={name} className={Styles["cont-img"]} />{" "}
      </div>
       </div>
    )
}

export default Content

Content.proptype = {
    name:PropTypes.string,
    description:PropTypes.string,
    image:PropTypes.string,
}