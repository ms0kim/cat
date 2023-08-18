import { useEffect, useState, useRef } from "react";
import Header from '../Header'
import Upload from "./Upload";
import Scroller from '../Scroller'
import PhotoContent from "./PhotoContent";
import Footer from '../Footer'

export default function PhotoPage(){
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
  const [modal, setModal] = useState(false);

  return(
    <div className='photoCon' onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Upload modal={modal} setModal={setModal}/>
      <Scroller>
        <div className="con">
          <PhotoContent modal={modal} setModal={setModal} />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}