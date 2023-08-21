import { NextApiRequest, NextApiResponse } from 'next';
import { posts, Post, Comment } from './postdata'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    // 새 게시물 생성
    const { title, content } = req.body;
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
      comments: [],
    };
    posts.unshift(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}