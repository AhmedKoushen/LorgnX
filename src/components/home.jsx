import Section from "./Section";
import tamer from "../media/tamer.jpg";
import img1 from "../media/11.jpg";
import { useState, useEffect, useRef } from 'react';
import "./home.css";
import Slider from "react-slick";
import CardCarousel from './HorizontalScrollMenu';

const menuItems = [
    {
      title: 'Item 1',
      image: img1,
    },
    {
        title: 'Item 1',
        image: img1,
      },    {
        title: 'Item 1',
        image: img1,
      },    {
        title: 'Item 1',
        image: img1,
      },    {
        title: 'Item 1',
        image: img1,
      },
        
    // Add more menu items as needed
  ];

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

 const useScrollbarWidth = () => {
    const didCompute = useRef(false);
    const widthRef = useRef(0);
  
    if (didCompute.current) return widthRef.current;
  
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    didCompute.current = true;
    widthRef.current = scrollbarWidth;
  
    return scrollbarWidth;
  };

function Home(){
      // the size of the window in the begginning
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // we use the useEffect hook to listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);

    console.log('width: ', windowSize.width);
    console.log('height: ', windowSize.height);

    return(
        <>
        
            <Section style={{backgroundColor: "rgb(17,17,17)", color: "rgb(247,247,250)", padding: "0", justifyContent: "center"}}>
                    <div className="imgContainer" style={{width: (windowSize.width - useScrollbarWidth()), height: (windowSize.height > 500? windowSize.height - 80 : 500), overflow:"hidden", display:"flex", justifyContent:"center",}}>
                        <img src={img1} style={{padding:"0", margin:"0",width:"100%", alignSelf: "center"}} />
                        <div style={{position:"absolute", zIndex:"1", top:"47%", textShadow: "-0.5px 0.5px 1px #000, 0.5px 0.5px 1px #000, 0.5px -0.5px 1px #000, -0.5px -0.5px 1px #000" }}>
                            <h1 style={{marginBottom: "0.7em", fontSize: "7em", fontFamily: "Playfair Display, serif"}}>Lorgn X</h1>
                            <p>Make any occasion unforgattable</p>
                        </div>
                    </div>
            </Section>
            <Section style={{backgroundColor: "rgb(247,247,250)", color: "rgb(17,17,17)", justifyContent: "center"}}>
                <div id="Services" style={{marginBottom: "10em", marginTop: "3em"}}>
                    <h1>Services</h1>
                </div>
                <div className="CellContainer" style={{width: (windowSize.width - useScrollbarWidth()), marginBottom: "5em"}}>
                    <div className="cell">
                        <h1><i className="fa-solid fa-calendar-days"></i></h1>
                        <h2 style={{marginTop: "2rem", marginBottom: "2rem"}}>Event Organizing</h2>

                    </div>
                    <div className="cell">
                        <h1><i className="fa-solid fa-cake-candles"></i></h1>
                        <h2 style={{marginTop: "2rem", marginBottom: "2rem"}}>Event Organizing</h2>

                    </div>
                    <div className="cell">
                        <h1><i className="fa-solid fa-store"></i></h1>
                        <h2 style={{marginTop: "2rem", marginBottom: "2rem"}}>Event Organizing</h2>

                    </div>


                </div>
            </Section>
            <Section style={{backgroundColor: "rgb(45,45,46)", color: "rgb(247,247,250)", padding: "0"}}>
                <div id="About" style={{marginBottom: "5em", marginTop: "3em", justifyContent: "center", padding:"2em"}}>
                    <h1 style={{marginBottom: "3em"}}>about us</h1>
                    <p style={{fontSize: "1.2em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat. Purus in massa tempor nec. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Sem et tortor consequat id porta. Arcu non sodales neque sodales ut etiam sit. In nisl nisi scelerisque eu ultrices vitae auctor. Eleifend mi in nulla posuere sollicitudin aliquam. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Felis imperdiet proin fermentum leo vel orci. Viverra aliquet eget sit amet. Semper auctor neque vitae tempus quam pellentesque. Lectus magna fringilla urna porttitor rhoncus dolor.</p>
                    <p style={{fontSize: "1.2em"}}>Aenean et tortor at risus viverra adipiscing at in. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Morbi blandit cursus risus at. Ut etiam sit amet nisl purus in mollis nunc sed. Volutpat est velit egestas dui id ornare. Mauris ultrices eros in cursus. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Aliquam sem et tortor consequat id. Lacus sed turpis tincidunt id. At auctor urna nunc id. Viverra mauris in aliquam sem fringilla ut morbi.</p>
                </div>
            </Section>
            <Section style={{backgroundColor: "rgb(17,17,17)", color: "rgb(247,247,250)", padding: "0", justifyContent: "center"}}>
            <h1 id="Gallery" style={{marginTop: "2em", marginBottom: "1em"}}>Gallery</h1>
            <div style={{width: (windowSize.width - useScrollbarWidth())}}>
            <CardCarousel items={menuItems}/>
            </div>
            </Section>
        </>
        )
}
export default Home;