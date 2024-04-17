import './About_Profile.css';
// import boy from '../images/boy.png';
// import game from '../images/game.png';
// import photo from '../images/photo.png';
// import sound from '../images/sound.png';
// import webdeveoloper from '../images/web deveoloper.png';
// import uidesginer from '../images/ui desginer.png';
import p1 from "../images/about1.jpeg";
import p2 from '../images/about2.jpeg';
import p3 from '../images/about3.jpeg';
import p4 from '../images/about4.jpeg';
import p5 from '../images/about5.jpeg';
import p6 from '../images/about6.jpeg';
import p7 from '../images/about7.png';
import p8 from '../images/about8.jpeg';
import p9 from '../images/333.jpg';
import p10 from '../images/2.jpg';
import coding from '../icons/coding.png'
import illustration from '../icons/illustration.png'
import Microphone from '../icons/Microphone.png'
import game_development from '../icons/game-development.png'
import Photographer from '../icons/Photographer.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faMessage,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
function About_profile() {

  // const about = useSelector(state => state.About.aboutData.n)
  // const {name} = useSelector(state => state.user)
  const id = useSelector(state => state.about.id)
  const na = useSelector(state => state.about.name)

  const Peoples = [
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p9],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p10, p5, p9, ],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
    [
      {
        name: "I’m Rayan Adlrdard",
        front: "Front-end Developer ",
        aboutDiscrpation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
        myServicesD: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        image: p3,
        MyServices: [
          {
            img: coding,
            development: "web development",
            p: "blog, e-commerce",
          },
          {
            img: illustration,
            development: "uI/uX design",
            p: "Mobile app, website design",
          },
          {
            img: Microphone,
            development: "sound design",
            p: "Voice Over, Beat Making",
          },
          {
            img: game_development,
            development: "game design",
            p: "Character Design, Props & Objects",
          },
          {
            img: Photographer,
            development: "photography",
            p: "portrait, product photography",
          },
          {
            img: Microphone,
            development: "web development",
            p: "blog, e-commerce",
          },
        ],
        PortfolioD:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        PortfolioImages: [p1, p2, p3, p4, p5, p6, p7, p8, p1],
        Country: "Fayoum",
        City: "Egypt",
        Streat: "35 vhatara, Badda",
        Email: "youremail@gmail.com",
        Github: "@yourusername",
        Instagram: "@yourusername",
        Support_services: "15369",
        Office: "+58 (021)356 587 235",
        Personal: "+58 (021)356 587 235",
      },
    ],
  ];
  return (
    <div className="portfolio">
      {Peoples[id].map((e) => (
        <div className="container">
            <div className="name">
                <div className='content'>
                    <h2>{e.name}</h2>
                    <h3>{e.front}</h3>
                    <p>{e.aboutDiscrpation}</p>
                    <button>HIRE ME <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                <div className='image'>
                    <img src={e.image}/>
                </div>
            </div>

            <div className="myServices">
                <h3>my services</h3>
                <p>{e.myServicesD}</p>
                {e.MyServices.map((item) => 
                    <div className='box_Services'>
                        <img src={item.img}/>
                        <h4>{item.development}</h4>
                        <p>{item.p}</p>
                    </div>
                )}
            </div>

            <div className="Portfolio">
                <h3>Portfolio</h3>
                <p>{e.PortfolioD}</p>
                {e.PortfolioImages.map((item) => 
                <div className='images'>
                    <img src={item}/>
                </div>
                )}
            </div>

            <div className="information">
                <h3>Contact information</h3>
                <div className='div_content'>
                    <div className='div1'>
                        <p><span>Country:</span><span className='s'>{e.Country}</span></p> 
                        <p><span>City:</span><span className='s'>{e.City}</span></p> 
                        <p><span>Streat:</span><span className='s'>{e.Streat}</span></p> 
                    </div>
                    <div className='div2'>
                        <p><span>Email:</span><span>{e.Email}</span> </p>
                        <p><span>Github:</span><span>{e.Github}</span></p>
                        <p><span>Instagram:</span><span>{e.Instagram}</span></p>
                    </div>
                    <div className='div3'>
                        <p><span>Support services: </span><span>{e.Support_services}</span></p>
                        <p><span>Office:</span><span>{e.Office}</span></p>
                        <p><span>Personal: </span><span>{e.Personal}</span></p>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
export default About_profile;


// {e.MyServices.map((e) => (
//     <div>
//       <i>
//         <FontAwesomeIcon icon={e.icon} />
//       </i>
//     </div>
//   ))}
//   <p>{e.name}</p>
//   <p>{e.discrpation}</p>
//   <button>HIRE ME</button>

// import './abdelrahman.css';
// import gust from '../images/gust.jpeg';
// import boy from '../images/boy.png';
// import game from '../images/game.png';
// import photo from '../images/photo.png';
// import sound from '../images/sound.png';
// import webdeveoloper from '../images/web deveoloper.png';
// import uidesginer from '../images/ui desginer.png';
// import p1 from '../images/p1.jpeg';
// import p2 from '../images/p2.jpeg';
// import p3 from '../images/p3.jpeg';
// import p4 from '../images/p4.jpeg';
// import p5 from '../images/p5.jpeg';
// import p6 from '../images/p6.jpeg';
// import p7 from '../images/p7.jpeg';
// import p8 from '../images/p8.jpeg';
// import p9 from '../images/p9.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// function abdelrahmant () {
//     return (
//             <div className="portfolio">
//                 <div className="header">
//                     <span className="Register">Register</span>
//                     <div className="icon-register">
//                         <span className="Register-photo">
//                             <i className="far fa-bell"></i>
//                             <div className="Notices">
//                                 <span className="note">
//                                     <span>24</span>
//                                 </span>
//                             </div>
//                         </span>
//                     </div>
//                     <div className="container">
//                         <input type="text" name="name" className="input-search" placeholder="Search e.g" />
//                         <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div>
//                     </div>
//                 </div>
//                 <div className="navbar">
//                     <ul className="nav">
//                         <li className="home"> <i className="fa-solid fa-house"></i> Home</li>
//                         <li className="mycourses"> <i className="fa-regular fa-calendar-check"></i> My Courses</li>
//                         <li className="chat"> <i className="fa-regular fa-message"></i> Chat</li>
//                         <li className="fav"> <i className="fa-solid fa-bookmark"></i> Favorites</li>
//                         <li className="setting"> <i className="fa-solid fa-gear"></i> Setting</li>
//                         <li className="about"> <i className="fa-solid fa-user"></i> About</li>
//                     </ul>
//                     <div className="container-btn">
//                         <input type="button" value="logout" className="logout" />
//                         <div className="icon-btn"><i className="fa-solid fa-right-to-bracket"></i></div>
//                     </div>

//                 <div className="parent">
//                     <div className="shapes">
//                         <div className="div-1"></div>
//                         <div className="div-2"></div>
//                         <div className="div-3"></div>
//                         <div className="div-4"></div>
//                         <div className="div-5"></div>
//                         <div className="div-6"></div>
//                         <div className="div-7"></div>
//                     </div>

//                     <div className="cont-img">
//                         <div className="img"></div>
//                     </div>
//                     <div className="div-0">
//                         <div className="name">I’m Abdelrahman</div>
//                         <div className="div-f">Front-end</div>
//                         <div className="div-d">Developer</div>
//                         <p className="paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat
//                             placerat lobortis. Natoque
//                             rutrum semper sed suspendisse nunc lectus.</p>
//                         <div>
//                             <input type="button" value="HIRE ME" class="HIRE" />
//                             <div className="icon-button">
//                                 <i className="fa-solid fa-arrow-right"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="services">
//                     <p>my services</p>
//                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
//                         enim velit mollit. lorem ipsum</span>
//                 </div>
//                 <div className="web">
//                     <div className="span-img"><span className="img-web"></span></div>
//                     <span className="web-p1">web development
//                         <p className="web-p2">blog,e-commerce </p>
//                     </span>
//                 </div>
//             </div>
//             <div className="ui">
//                 <div className="span-img"><span className="img-ui"></span></div>
//                 <span className="ui-p1">uI/uX design
//                     <p className="ui-p2">Mobile app, website design </p>
//                 </span>
//             </div>
//             <div className="sound">
//                 <div className="span-img"><span className="img-sound"></span></div>
//                 <span className="sound-p1">sound design
//                     <p className="sound-p2">Voice Over, Beat Making</p>
//                 </span>
//             </div>
//             <div className="game">
//                 <div className="span-img"><span className="img-game"></span></div>
//                 <span className="game-p1">game design
//                     <p className="game-p2">Character Design, Props & Objects</p>
//                 </span>
//             </div>
//             <div className="photography">
//                 <div className="span-img"><span className="img-photography"></span></div>
//                 <span className="photography-p1">photography
//                     <p className="photography-p2">portrait, product photography</p>
//                 </span>
//             </div>
//             <div className="advertising">
//                 <span className="advertising-p1">advertising
//                     <p className="advertising-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac
//                         dictum a urna viverra morbi. </p>
//                 </span>
//                 <div className="advertising-p3">
//                     <span>ORDER NOW</span>
//                 </div>
//             </div>
//             <div className="portfolio">
//                 <p>Portfolio</p>
//                 <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
//                     enim velit mollit. lorem ipsum</span>
//                 <div className="container-all">
//                     <div className="All-categories">All categories</div>
//                     <div className="UI-Design">UI Design</div>
//                     <div className="Web-Templates">Web Templates</div>
//                     <div className="Logo">Logo</div>
//                     <div className="Branding">Branding</div>
//                     <div className="container-pictures">
//                         <div className="pic">
//                             <div className="pic1"></div>
//                             <div className="pic2"></div>
//                             <div className="pic3"></div>
//                             <div className="pic4"></div>
//                             <div className="pic5"></div>
//                             <div className="pic6"></div>
//                             <div className="pic7"></div>
//                             <div className="pic8"></div>
//                             <div className="pic9"></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="contact">
//                 </div>
//                 <div className="cont-contact">
//                     <div className="cont">
//                         <div className="contact-p"><div>Contact information</div></div>
//                         <div className="cont-1">
//                             <div className="map"><i className="fa-regular fa-map"></i></div>
//                             <div className="list-1">
//                                 <ul>
//                                     <li>Country:</li>
//                                     <li>City:</li>
//                                     <li>Streat:</li>
//                                 </ul>
//                             </div>
//                             <div className="list-2">
//                                 <ul>
//                                     <li>Egypt</li>
//                                     <li>Fayoum</li>
//                                     <li>35 vhatara, Badda</li>
//                                 </ul>
//                             </div>
//                             <div className="cont-2">
//                                 <div className=" email"><i className="fa-solid fa-envelope"></i></div>
//                                 <div className="list-1">
//                                     <ul>
//                                         <li>Email:</li>
//                                         <li>Github</li>
//                                         <li>Instagram</li>
//                                     </ul>
//                                 </div>
//                                 <div className="list-2">
//                                     <ul>
//                                         <li>youremail@gmail.com</li>
//                                         <li>@yourusername</li>
//                                         <li>@yourusername</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="cont-3">
//                             <div className=" mobile"><i className="fa-solid fa-mobile"></i> </div>
//                             <div className="list-1">
//                                 <ul>
//                                     <li>Support services:</li>
//                                     <li>Office:</li>
//                                     <li>Personal:</li>
//                                 </ul>
//                             </div>
//                             <div className="list-2">
//                                 <ul>
//                                     <li>15369</li>
//                                     <li>+58 (021)356 587 235</li>
//                                     <li>+58 (021)356 587 235</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }
// export default Abdelrahman;
