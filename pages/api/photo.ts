import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Photo = {
  id: string,
  title: string,
  img: string,
}

const photos: Photo[] = [
  { 
    id: '1',
    title: '캣타워에 있는 구름이',
    img:'/assets/img/cat1.png', 
  },
  { 
    id: '2',
    title: '창문 구경하는 구름이',
    img:'/assets/img/cat2.jpg', 
  },
  { 
    id: '3',
    title: '공격 준비중인 구름이',
    img:'/assets/img/cat3.jpg', 
  },
  { 
    id: '4',
    title: '밥먹는 구름이',
    img:'/assets/img/cat4.jpg', 
  },
  { 
    id: '5',
    title: '낭만 고양이 구름이',
    img:'/assets/img/cat5.jpg', 
  },
  { 
    id: '6',
    title: '맹수 구름이',
    img:'/assets/img/cat6.jpg', 
  },
  { 
    id: '7',
    title: '호기심 가득한 구름이',
    img:'/assets/img/cat7.jpg', 
  },
  { 
    id: '8',
    title: '잘생긴 구름이',
    img:'/assets/img/cat8.jpg', 
  },
];

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  if(req.method === 'GET'){
    res.status(200).json(photos);
  // } else if(req.method === 'POST'){
  //   const {title, image, extension} = req.body;
  //   const imageBuffer = Buffer.from(image, 'base64');
  //   const imageFileName = `${Date.now()}.${extension}`;
  //   const imagePath = path.join('/vercel/path0', 'public', 'uploads', imageFileName);

  //   fs.writeFile(imagePath, imageBuffer, (err) => {
  //     if(err) {
  //       console.error('Error uploading image:', err);
  //       res.status(500).json({message: 'Error uploading image'});
  //     } else {
  //       const newPhoto: Photo = {
  //         id: Date.now().toString(),
  //         title: title,
  //         img: `/uploads/${imageFileName}`,
  //       };

  //       photos.unshift(newPhoto); //최근 등록순
  //       res.status(201).json(newPhoto);
  //     }
  //   });
  } else {
    res.status(405).json({message: 'Method not allowed'});
  }
}