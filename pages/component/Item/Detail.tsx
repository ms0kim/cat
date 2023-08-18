import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

type Item = {
  id: string;
  name: string;
  text: string;
  img: string;
  con: string;
};

export default function ItemDetail() {
  const [item, setItem] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/item')
    .then((res) => res.json())
    .then((data) => {
      setItem(data);
    })
    .catch((err) => {
      alert('목록을 가져올 수 없습니다');
      console.log(err);
    })
  }, [])

  return(
    <div className="itemdetail">
    </div>
  )
}