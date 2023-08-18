import { useEffect, useState, useRef } from "react";
import Header from '../../Header'
import Scroller from '../../Scroller'
import PostDetail from "./PostDetail";
import Footer from '../../Footer'

export default function PostDetailPage() {
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
    <div className="post" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <PostDetail />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}