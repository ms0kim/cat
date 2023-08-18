import { NextApiRequest, NextApiResponse } from 'next';

type Book = {
  id: string,
  tag: string,
  label: string,
  img: string,
}

export default function handler(req:NextApiRequest, res:NextApiResponse<Book[]>) {
  const ItemArray: Book[] = [
    { 
      id: 'menu1',
      tag: '#품종별 성격',
      label:'품종별 성격', 
      img: '/assets/img/book_cat1.jpg',
    },
    { 
      id: 'menu2', 
      tag: '#장모종 털관리',
      label:'장모종 털관리', 
      img: '/assets/img/menu2.jpg',
    },
    { 
      id: 'menu3', 
      tag: '#음수량 조절법',
      label:'음수량 조절법', 
      img: '/assets/img/book_cat2.jpg',
    },
    {
      id: 'menu4', 
      tag: '#귀청소 방법',
      label:'귀청소 방법', 
      img: '/assets/img/menu4.jpg',
    },
    { 
      id: 'menu5', 
      tag: '#올바르게 간식 주기',
      label:'올바르게 간식 주기', 
      img: '/assets/img/menu5.jpg',
    }
  ];

  res.status(200).json(ItemArray);
}