import { useEffect, useState, useRef } from "react";
import Header from '../../Header'
import Scroller from '../../Scroller'
import PostList from "./PostList";
import Footer from '../../Footer'

export default function PostsPage() {
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
          <PostList />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}