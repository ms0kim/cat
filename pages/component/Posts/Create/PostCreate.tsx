import { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostCreate() {
  const router = useRouter();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  //포스트 작성하기
  const createPost = async () => {
    if(newPostTitle === '' || newPostContent === ''){
      alert('내용을 작성해주세요')
      return;
    } else{
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { //헤더 설정
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPostTitle, //새 게시물 제목
          content: newPostContent, //새 게시물 내용
        }), //json 데이터를 문자열로 변환하여 넣음
      });
  
      if(res.ok) {
        const newPost = await res.json();
        router.push(`/posts/${newPost.id}`);
      } else{
        alert('게시물을 작성할 수 없습니다.');
      }
    }
  };

  return(
    <div className="postcreate">
      <h2>새 게시물 작성</h2>
      <input
        type="text"
        placeholder="제목을 작성해주세요"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
      />
      <textarea
        placeholder="내용을 작성해주세요"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <div className="btns">
        <Link className="subBtn" href="/posts">목록으로</Link>
        <button onClick={createPost}>게시물 작성</button>
      </div>
    </div>
  )
}