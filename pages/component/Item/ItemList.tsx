import Link from "next/link";
import { useState, useEffect } from "react"

type Item = {
  id: string;
  name: string;
  text: string;
  img: string;
  con: string;
};

export default function ItemList() {
  //api 담을 array 변수
  const [itemData, setItemData] = useState<Item[]>([]);

  //api 호출
  useEffect(() => {
    fetch('/api/item')
    .then((res) => res.json())
    .then((data) => {
      setItemData(data);
    })
    .catch((err) => {
      alert('목록을 가져올 수 없습니다');
      console.log(err);
    })
  }, [])

  return(
    <div className="itemlist">
      <div className="title">
        <h2>냥템 베스트 순위</h2>
        <p>
          냥템추천은 여러분들의 추천으로 순위가 매겨집니다
        </p>
      </div>
      <ul>
        {itemData.map(item => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>
              <div className="tag">
                <h4>{item.name}</h4>
                <img src="/assets/img/best.svg" alt="" />
              </div>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <h4>{item.text}</h4>
              <p>{item.con}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}