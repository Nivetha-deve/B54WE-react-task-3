import Styles from "./Page.module.css";
function Header () {
    return (
    <>
     <div className={Styles["header"]}>
        <nav className={Styles["navbar"]}>StarBootstrap</nav>
        <button className={Styles["btn"]}>Sign Up</button>
     </div>
    </>
    )
}

export default Header;