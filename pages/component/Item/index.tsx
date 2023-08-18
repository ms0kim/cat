import { useEffect, useState } from "react";
import Header from '../Header'
import Scroller from '../Scroller'
import ItemList from "./ItemList";
import Footer from '../Footer'
export default function ItemPage() {
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
    <div className="item" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <ItemList />
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}