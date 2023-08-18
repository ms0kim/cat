import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function PostEdit() {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  //해당 아이디 게시물 내용 가져오기
  useEffect(() => {
    if(id){
      fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setNewTitle(data.title);
        setNewContent(data.content);
      })
      .catch((err) => {
        alert('게시물을 가져올 수 없습니다')
      });
    }
  }, [id]);

  //수정하기
  const handleUpdate = () => {
    if (!post) {
      alert('게시물을 불러올 수 없습니다.');
      return;
    }
    if(post.title === newTitle && post.content === newContent){
      alert('수정할 내용이 없습니다.')
    } else {
      fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
        }),
      })
      .then((res) => {
        if (res.ok) {
          router.push(`/posts/${id}`)
        } else{
          alert('수정할 수 없습니다')
        }
      })
      .catch((err) => {
        alert('수정할 수 없습니다')
      })
    }
  };

  if(!post) {
    return <div>Post not found.</div>
  }

  return(
    <div className="postedit">
      <h2>게시물 수정하기</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button onClick={handleUpdate}>수정하기</button>
    </div>
  )
}