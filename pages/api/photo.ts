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

function corsMiddleware(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 모든 origin에서 접근 허용 (보안에 취약할 수 있음, 실제 배포에서는 특정 origin만 허용하는 것이 좋습니다)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // 허용하는 HTTP 메서드 목록
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 요청 헤더 중 Content-Type을 허용
}

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  corsMiddleware(req, res);
  
  if (req.method === 'POST') {
    // POST 요청 처리
    const { title, image, extension } = req.body;
    const imageBuffer = Buffer.from(image, 'base64');
    const imageFileName = `${Date.now()}.${extension}`;
    const imagePath = path.join(process.cwd(), 'public', 'uploads', imageFileName);

    try {
      // 이미지 저장
      fs.writeFileSync(imagePath, imageBuffer);

      const newPhoto = {
        id: Date.now().toString(),
        title: title,
        img: `/uploads/${imageFileName}`,
      };

      photos.unshift(newPhoto); // 최근 등록순
      res.status(201).json(newPhoto);
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ message: 'Error uploading image' });
    }
  } else if (req.method === 'GET') {
    // GET 요청 처리
    res.status(200).json(photos);
  } else {
    // 허용되지 않는 HTTP 메서드에 대한 처리
    res.status(405).json({ message: 'Method not allowed' });
  }
}