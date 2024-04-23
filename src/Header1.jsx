import { useState } from "react";
import Styles from "./Page.module.css";

function Header1 () {
       const [email,setEmail] = useState('');  
       const [show,setShow] = useState('');
       const [submitted, setSubmitted] = useState(false);

       const  validateEmail = (email) => {
        return email.includes("@") && email.includes(".");
       };
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!email){
            setShow(
             <div className={Styles["err-msg"]}>
             Email Address is required. <br/>
              Email Address Email is not vaild.
              </div>
            
              );
            return;
            }
        if (!validateEmail(email)){
          setShow (
            <div className={Styles["errs-msg"]}>
            Email Address Email is not vaild.
            </div>
            );
          return;
        }

        setEmail ("");
         setShow ("");
         setSubmitted(true);
            
       console.log("Form submitted successfully!",email);
       console.log("Email Submitted :",email)
    };

        return (
                <div className={Styles["main"]}>
                  <h2 className={Styles["heading"]}> Generate  more  leads <br /> 
                         with a professional <br />
                           landing page!  
                   </h2>
                   <div>
                  <form  onSubmit={handleSubmit} className={Styles["main1"]}>
                  <input  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Adress" className={Styles["email"]} /> 
                  {show && <div className={Styles["err-msg"]}>{show}</div>}
                  <button type="submit" className={Styles["btn1"]}>Submit</button>
                </form>
                    {submitted && !show && (
                        <div className={Styles["form-sub"]}>
                        <p className={Styles["pag"]}>Form submission successful!</p>
                <p className={Styles["act"]}>To activate this form, sign up at </p>
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
             </div>
                    )}
            </div> 
            </div>
            )     
 } 


export default Header1