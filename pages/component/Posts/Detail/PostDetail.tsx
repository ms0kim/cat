import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

interface Comment {
  id: number;
  text: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}

export default function PostDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');
  const router = useRouter();
  const { id } = router.query;

  //게시물 가져오기
  useEffect(() => {
    if(id){
      fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        alert('게시물을 가져올 수 없습니다')
      })
    }
  }, [id]);

  //게시물 삭제
  const handleDelete = async () => {
    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if(res.ok) {
        alert('삭제되었습니다')
        router.push('/posts');
      } else {
        alert('삭제할 수 없습니다');
      }
    })
  }

  //댓글 작성
  const handleAddComment = () => {
    if(newComment.trim() !== ''){ //스페이스바만 눌렀을 때 안됨
      const newCommentObj: Comment = {
        id: Date.now(),
        text: newComment,
      };
      setPost(prevPost => ({
        ...prevPost!,
        comments: [...prevPost!.comments, newCommentObj],
      }));
      setNewComment('');
    }
  }

  if(!post){
    return <div>Loading...</div>;
  }

  return(
    <div className="postdetail">
      <div className="title">
        <h2>{post.title}</h2>
        <span>{post.createdAt}</span>
      </div>
      <div className="content">
        <p>{post.content}</p>
        <div className="btns">
          <div>
            <Link className="subBtn" href={`/posts/edit/${id}`}>
              수정하기
            </Link>
            <button className="subBtn" onClick={handleDelete}>
              삭제하기
            </button>
          </div>
          <Link className="abtn" href="/posts">
            목록으로
          </Link>
        </div>
      </div>
      <h4>댓글 {post.comments.length ? post.comments.length : '0'}개</h4>
      <ul className="comment">
        {post.comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <div className="commentPost">
        <input
          type="text"
          placeholder="댓글을 작성해주세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>댓글 작성</button>
      </div>
    </div>
  )
}