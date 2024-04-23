 import Styles from "./Page.module.css";
 function Footer () {
    return (
        //  <div className={Styles["footer-main"]}>
        //      <nav className={Styles["nav1"]}>About</nav><span className={Styles["separator"]}>.</span>
        //      <nav className={Styles["nav1"]}>Contact</nav> <span className={Styles["separator"]}>.</span>
        //      <nav className={Styles["nav1"]}>Terms of Use</nav> <span className={Styles["separator"]}>.</span>
        //      <nav className={Styles["nav1"]}>Privacy Policy</nav>
        //      <p className={Styles["footer-pag"]}>© Your Website 2023. All Rights Reserved.</p>
        //      <div className={Styles["footer-icons"]}>
        //      <i className="fa-brands fa-facebook"></i>
        //      <i className="fa-brands fa-twitter"></i>
        //      <i className="fa-brands fa-instagram"></i>
        //      </div>
        //  </div>
        <div className={Styles["footer-main"]}>
        <div className={Styles["first-div"]}>
          <div className={Styles["first-dir"]} >
            <nav className={Styles["nav1"]}>About</nav>
            <span className={Styles["separator"]}>.</span>
            <nav className={Styles["nav1"]}>Contact</nav>{" "}
            <span className={Styles["separator"]}>.</span>
            <nav className={Styles["nav1"]}>Terms of Use</nav>{" "}
            <span className={Styles["separator"]}>.</span>
            <nav className={Styles["nav1"]}>Privacy Policy</nav>
          </div>
          <div className={Styles["sec-dir"]} >
            {/* < className={Styles["footer-pag"]}> */}
              © Your Website {new Date().getFullYear()}. All Rights Reserved.
            
          </div>
        </div>
        <div className={Styles["footer-icons"]}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    );
  }

 export default Footer;