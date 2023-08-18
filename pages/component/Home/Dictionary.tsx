import { useState, useEffect } from "react"
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}
type Book = {
  id: string,
  tag: string,
  label: string,
  img: string,
}

export default function Dictionary() {
  const [menu, setMenu] = useState<Book[]>([]);
  const [selectedMenu, setSelectedMenu] = useState('menu1');

  const [posts, setPosts] = useState<Post[]>([]);

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
    if(posts){
      fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        alert('게시물을 가져올 수 없습니다');
        console.log(err);
      })
    }
  }, []);

  return (
    <div className="dictionary">
      <div className="left">
        <h3>냥사전</h3>
        <div>
          <ul>
            {menu.map(menu => (
              <li 
                className={selectedMenu === menu.id ? 'active' : ''}
                key={menu.id}
                onClick={() => setSelectedMenu(menu.id)}
              >
                {menu.tag}
              </li>
            ))}
          </ul>
          {menu.map(menu => (
            <div 
              className={selectedMenu === menu.id ? 'view' : ''}
              key={menu.id}
            >
              <Link href={`/book/${menu.id}`}>
                <span></span>
                <h3>{menu.label}</h3>
                <img src={menu.img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <h3>현재 인기글</h3>
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <p>{post.title}</p>
                <span>{post.createdAt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}