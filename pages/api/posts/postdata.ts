export interface Comment {
  id: number;
  text: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}


export const posts: Post[] = [
  {
    id: 1,
    title: '코코가 밥을 잘 안먹네요ㅠㅠ',
    content: '올해로 14살이 된 노령묘 코코입니다\n코코가 요즘 밥을 잘 안먹어서 걱정이에요\n혹시 잘 먹일 수 있는 방법 있을까요?ㅠㅠ',
    createdAt: '2023. 8. 12. 오후 2:15:39',
    comments: [
      {
        id: 4,
        text: '습식캔 비율을 높여보세요ㅠㅠ'
      },
      {
        id: 5,
        text: '저희 망고랑 동갑이네요 전 뭐든 물에 타서 주고 있어요'
      },
      {
        id: 6,
        text: '저는 간식을 좀 더 주게 되는 것 같아요'
      }
    ]
  },
  {
    id: 2,
    title: '3개월 된 아깽이 간식 뭘 주면 좋을까요?',
    content: '안녕하세요 처음 글 씁니다\n3개월 된 아깽이 밤이를 키우는데\n간식 뭘 주면 좋을까요?',
    createdAt: '2023. 8. 11. 오후 6:08:24',
    comments: [
      {
        id: 7,
        text: '아깽이 때는 주지 않는게 좋을거예요'
      },
      {
        id: 8,
        text: '6개월 안된 애기들은 안주는게 좋아요~'
      }
    ]
  },
  {
    id: 3,
    title: '페르시안 냥이들은 성격이 어때요?',
    content: '페르시안 구름이를 키우는 집사입니다\n우리 구름이는 너무 얌전해서 걱정인데\n다른 페르시안은 어떤가요?',
    createdAt: '2023. 8. 10. 오후 9:29:14',
    comments: [
      {
        id: 9,
        text: '저희 집 냥이도 엄청 얌전해요\n페르시안이 대체적으로 다 얌전한듯요'
      }
    ]
  },
  {
    id: 10,
    title: '고양이가 너무 물어요',
    content: '제목 그대로 고양이가 너무 물어요\n어렸을 때 손으로 놀아줘서 그런건지 모르겠는데\n계속 물려서 상처투성이에요 도와주세요ㅠㅠ',
    createdAt: '2023. 8. 9. 오후 3:46:02',
    comments: [
      {
        id: 11,
        text: '절대 손으로 놀아주지 마시고 물리면 바로 혼내시던지 무시하세요'
      }
    ]
  },
  {
    id: 12,
    title: '장모 냥이들 털 관리 어떻게 하세요?',
    content: '요즘 엄청 덥잖아요 그래서 털 좀 밀어주려고 하는데\n미용샵으로 가시는지 아님 직접 미시는지 궁금해요',
    createdAt: '2023. 8. 8. 오후 5:12:35',
    comments: [
      {
        id: 13,
        text: '저는 직접 밀어주고 있어요!\n아무래도 샵 가면 며칠 내내 힘들어하더라고요ㅠㅠ'
      }
    ]
  },
  {
    id: 14,
    title: '단모종도 털 많이 빠지나요?',
    content: '장모종은 많이 빠지는걸 알고 있는데\n단모종도 털이 많이 빠질까요?',
    createdAt: '2023. 8. 7. 오후 4:22:43',
    comments: [
      {
        id: 15,
        text: '단모종 냥바냥이에요 저희 냥이는 잘 안빠져요!'
      }
    ]
  },
  {
    id: 16,
    title: '더운 날 혼자 있는 고양이 관리 어떻게 하세요?',
    content: '집에 혼자 있으면 더울까봐 걱정인데\n다른 분들은 어떻게 하시는지 궁금합니다',
    createdAt: '2023. 8. 6. 오후 3:45:15',
    comments: [
      {
        id: 17,
        text: '저는 집에 24시간 에어컨 틀어놔요ㅠㅠ'
      }
    ]
  },
];