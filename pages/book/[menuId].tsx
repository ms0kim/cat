import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import BookPage from "../component/Book";
import Menu1 from "../component/Book/Menu1";
import Menu2 from "../component/Book/Menu2";
import Menu3 from "../component/Book/Menu3";
import Menu4 from "../component/Book/Menu4";
import Menu5 from "../component/Book/Menu5";
import Scroller from "../component/Scroller"

export default function MenuPage() {
  const router = useRouter();
  const { menuId } = router.query as { menuId: string };

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

  const menuComponents:{ [key: string]: JSX.Element } = {
    menu1: <Menu1 />,
    menu2: <Menu2 />,
    menu3: <Menu3 />,
    menu4: <Menu4 />,
    menu5: <Menu5 />,
  }

  return (
    <div className="bookcontent" onWheel={handleOnWheel}>
      <Header hide={hide}/>
      <Scroller>
        <div className="con">
          <BookPage />
          {menuComponents[menuId]}
        </div>
        <Footer />
      </Scroller>
    </div>
  )
}