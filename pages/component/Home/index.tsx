import { useEffect, useState, useRef } from "react";
import Header from '../Header'
import Scroller from '../Scroller'
import MainBanner from './MainBanner'
import SubMenu from './SubMenu'
import Dictionary from './Dictionary'
import Posts from './Posts'
import Photo from './Photo'
import Footer from '../Footer'

export default function HomePage(){
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

  useEffect(() => { //마운트 return하면 언마운트
    console.log(window.scrollY)
  },[]);

  return(
    <div className="main" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <MainBanner />
          <SubMenu />
          <Dictionary />
          <Posts />
          <Photo />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}