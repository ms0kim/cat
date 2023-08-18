import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ItemDetail from "../component/Item/Detail";
import Item1 from "../component/Item/Item1";
import Item2 from "../component/Item/Item2";
import Item3 from "../component/Item/Item3";
import Item4 from "../component/Item/Item4";
import Item5 from "../component/Item/Item5";
import Item6 from "../component/Item/Item6";
import Item7 from "../component/Item/Item7";
import Item8 from "../component/Item/Item8";
import Scroller from "../component/Scroller";

export default function ItemPage() {
  const router = useRouter();
  const { itemId } = router.query as { itemId: string };

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

  const itemComponents:{ [key: string]: JSX.Element } = {
    item1: <Item1 />,
    item2: <Item2 />,
    item3: <Item3 />,
    item4: <Item4 />,
    item5: <Item5 />,
    item6: <Item6 />,
    item7: <Item7 />,
    item8: <Item8 />,
  }

  return (
    <div className="itemcontent" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <ItemDetail />
          {itemComponents[itemId]}
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}