import { NextApiRequest, NextApiResponse } from 'next';
import { posts, Post } from './postdata'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    if (id) {
      const post = posts.find((post) => post.id === Number(id));
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: '게시물을 찾을 수 없습니다.' });
      }
    } else {
      res.status(400).json({ message: '게시물 ID가 필요합니다.' });
    }
  } else if (req.method === 'PUT') {
    const { title, content } = req.body;
    const index = posts.findIndex((post) => post.id === Number(id));
    if (index !== -1) {
      posts[index] = { ...posts[index], title, content };
      res.status(200).json(posts[index]);
    } else {
      res.status(404).json({ message: '게시물을 찾을 수 없습니다.' });
    } 
  } else if (req.method === 'DELETE') {
    const updatedPosts = posts.filter((post) => post.id !== Number(id));
    if (updatedPosts.length !== posts.length) {
      posts.splice(0, posts.length, ...updatedPosts);
      res.status(200).json({ message: '게시물이 삭제되었습니다.' });
    } else {
      res.status(404).json({ message: '게시물을 찾을 수 없습니다.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}