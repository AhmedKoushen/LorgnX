import Section from "./Section";
import tamer from "../media/tamer.jpg";
import img1 from "../media/11.jpg";
import { useState, useEffect, useRef } from 'react';

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
                    <div className="imgContainer" style={{width: (windowSize.width - useScrollbarWidth()), height: (windowSize.height - 80), overflow:"hidden", display:"flex", justifyContent:"center",}}>
                        <img src={img1} style={{padding:"0", margin:"0", width:"100%", alignSelf: "center"}} />
                        <div style={{position:"absolute", zIndex:"1", top:(0.47*(windowSize.height-80))}}>
                            <h1>Hello</h1>                            <h1>Hello</h1>

                        </div>
                    </div>
            </Section>
            <Section style={{backgroundColor: "rgb(247,247,250)", color: "rgb(17,17,17)"}}>
                <h1>Hellww</h1>
            </Section>
            <Section style={{backgroundColor: "rgb(17,17,17)", color: "rgb(247,247,250)", padding: "0"}}>
                <p>ww</p>
            </Section>
        </>
        )
}
export default Home;