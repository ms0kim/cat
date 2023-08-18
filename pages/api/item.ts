import { NextApiRequest, NextApiResponse } from 'next';

type Item = {
  id: string,
  name: string,
  text: string,
  img: string,
  con: string,
}

export default function handler(req:NextApiRequest, res:NextApiResponse<Item[]>) {
  const ItemArray: Item[] = [
    { 
      id: 'item1',
      name:'1등', 
      text:'푹신한 에그타르트 쿠션',
      img: '/assets/img/item1.jpg',
      con: '실시간 1위! 우리 냥이의 귀여운 포토존',
    },
    { 
      id: 'item2', 
      name:'2등', 
      text:'부드러운 캣타워',
      img: '/assets/img/item2.jpg',
      con: '부드러운 촉감을 좋아하는 냥이에게 베스트',
    },
    { 
      id: 'item3', 
      name:'3등', 
      text:'원목 오가닉 코튼 해먹',
      img: '/assets/img/item3.jpg',
      con: '냥이에게 특별한 해먹을 선물해주세요',
    },
    {
      id: 'item4', 
      name:'4등', 
      text:'기린 스크래처',
      img: '/assets/img/item4.jpg',
      con: '구멍으로 놀아줄 수 있는 스크래처',
    },
    { 
      id: 'item5', 
      name:'5등', 
      text:'완벽한 각도 사료 그릇',
      img: '/assets/img/item5.jpg',
      con: '냥이가 편하게 먹을 수 있는 각도!',
    },
    { 
      id: 'item6', 
      name:'6등', 
      text:'고양이 케어 세트',
      img: '/assets/img/item6.jpg',
      con: '세트 상품을 기획가에 만나보세요',
    },
    { 
      id: 'item7', 
      name:'7등', 
      text:'프리미엄 원목 캣타워',
      img: '/assets/img/item7.jpg',
      con: '좋은 원목 재질로 오래 사용할 수 있어요',
    },
    { 
      id: 'item8', 
      name:'8등', 
      text:'미니 공룡 스크래처',
      img: '/assets/img/item8.jpg',
      con: '소파처럼 쉴 수 있는 스크래처',
    }
  ];

  res.status(200).json(ItemArray);
}