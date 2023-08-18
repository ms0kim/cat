import { useEffect, useState, useRef } from "react";
import Header from '../Header'
import Scroller from '../Scroller'
import Footer from '../Footer'
import CatLogin from "./CatLogin";

export default function LoginPage(){
  const [hide, setHide] = useState(false);
  const handleOnWheel = (e:any) => {
    if (e.nativeEvent.wheelDelta > 0) {
      // scroll up event
      setHide(false);
    } else {
      // scroll down event 
      setHide(true);
    }
  }

  return(
    <div className="login" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <CatLogin />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}