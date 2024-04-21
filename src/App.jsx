import Header from "./Header";
import './App.css';
import Header1 from "./Header1";
import Features from "./Features";
import Styles from "./Page.module.css";
import Content from "./Content";
import Student from "./Student";
import Footer1 from "./Footer1";
import Footer from "./Footer";

function App() {

  const featuredata = [
    {
      icon : <i className="bi-window"></i>,
      name : "Fully Responsive",
      description:"This theme will look great on any device, no matter the size!",
  
    },
    {
      icon : <i className="bi-layers"></i>,
     name : "Bootstrap 5 Ready",
     description : "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      icon : <i className="bi-terminal"></i>,
      name : "Easy to Use",
      description: "Ready to use with your own content, or customize the source files!",
    },
  ]
  const Contentdata = [
    {
      name:"Fully Responsive Design",
      description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
    },
    {
      name:"Updated For Bootstrap 5",
      description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
    },
    {
      name:"Easy to Use & Customize",
      description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
    },
  ];
  const studdata = [
    {
      image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
      name:"Margaret E.",
      description:"This is fantastic! Thanks so much guys!",
    },
    {
      image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
      name:"Fred S.",
      description:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      image:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
      name:"Sarah W.",
      description:"Thanks so much for making these free resources available to us!",
    },
  ];

  return (
    <>
     <Header />
     <Header1 />
     <div className={Styles["feat-container"]}>
     {featuredata.map ((data) => (
      <Features {...data} key={data.index} />
     ))};
     </div>
     <div className={Styles["Content-container"]}>
       {Contentdata.map ((ele) =>(
        <Content {...ele} key={ele.index}  />
       ))};
     </div>
     <div className={Styles["stud-container"]}>
       <span className={Styles["span-head"]}>What people are saying...</span>
      {studdata.map ((stud)=> (
        <Student {...stud} key={stud.index} />
      ))};
     </div>
      <Footer1 />
      <Footer />
    </>
  )
}

export default App
