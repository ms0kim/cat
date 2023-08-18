import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

type Book = {
  id: string,
  tag: string,
  label: string,
}
export default function BookContent() {
  const [menu, setMenu] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/book')
    .then((res) => res.json())
    .then((data) => {
      setMenu(data);
    })
    .catch((err) => {
      alert('내용을 가져올 수 없습니다');
      console.log(err);
    })
  }, [])

  return(
    <div className="bookcontent">
      <div className="title">
        <h2>어떤 부분이 궁금한가요?</h2>
        <div className="btns">
          {menu.map(menu => (
            <Link 
              href={`/book/${menu.id}`}
              key={menu.id}
              className={`subBtn ${router.query.menuId === menu.id ? 'selected' : ''}`}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}