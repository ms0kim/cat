import { useState, useEffect } from "react"
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  //포스트 가져오기
  useEffect(() => {
    fetch('/api/posts')
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
      console.log(data)
    })
    .catch((err) => {
      alert('게시물을 가져올 수 없습니다');
      console.log(err);
    })
  }, []);

  //pagination
  const page = 5; //페이지당 보여줄 갯수
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지

  //현재 페이지의 시작 인덱스
  const startIndex = (currentPage - 1) * page;
  //현재 페이지의 끝 인덱스
  const endIndex = startIndex + page;
  //현재 페이지에 보여질 인덱스
  const currentItems = posts.slice(startIndex, endIndex);
  if(currentItems.length === 0 && currentPage > 1){
    setCurrentPage(currentPage - 1);
  }

  return(
    <div className="postlist">
      <div>
        <div className="title">
          <h2>집사들과 소통해보세요</h2>
          <p>냥집사즈 커뮤니티입니다</p>
        </div>
        <div className="post">
          <ul>
            {currentItems.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <p>{post.title}</p>
                  <span>{post.createdAt}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="abtn" href='/posts/create'>게시물 작성하기</Link>
          <div className="pagination">
            {Array.from({length: Math.ceil(posts.length / page)}).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
