import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export default function CatLogin() {
  const [catname, setCatname] = useState('');
  const [catgender, setCatgender] = useState('');
  const [catkg, setCatkg] = useState('');
  const [catoption, setCatoption] = useState('');
  const router = useRouter();

  const catLogin = () => {
    if(!catname){
      alert('이름은 필수입니다');
      return
    }
    const catInfo = {
      catname,
      catgender,
      catkg,
      catoption,
    }
    localStorage.setItem('catInfo', JSON.stringify(catInfo));
    alert('저장되었습니다');
    router.push('/');
  }

  useEffect(() => {
    const storedCatInfo = localStorage.getItem('catInfo');
    if(storedCatInfo) {
      const parsedCatInfo = JSON.parse(storedCatInfo);
      setCatname(parsedCatInfo.catname);
      setCatgender(parsedCatInfo.catgender);
      setCatkg(parsedCatInfo.catkg);
      setCatoption(parsedCatInfo.catoption);
    }
  }, []);

  return(
    <div className="catlogin">
      <div className="title">
        <h2>우리 냥이 정보 입력하기</h2>
        <p>회원님의 냥이 정보를 입력해주세요</p>
      </div>
      <div className="text">
        <ul>
          <li className='catname'>
            <p>냥이이름</p>
            <input type="text" value={catname} onChange={e => setCatname(e.target.value)} />
          </li>
          <li className='catgender'>
            <p>성별</p>
            <select value={catgender} onChange={e => setCatgender(e.target.value)}>
              <option value="none">선택해주세요</option>
              <option value="암컷">암컷</option>
              <option value="수컷">수컷</option>
            </select>
          </li>
          <li className='catkg'>
            <p>체중</p>
            <input type="text" value={catkg} onChange={e => setCatkg(e.target.value)} />
            <span>kg</span>
          </li>
          <li className='catoption'>
            <p>품종</p>
            <select value={catoption} onChange={e => setCatoption(e.target.value)}>
              <option value="none">선택해주세요</option>
              <option value="코숏">코숏</option>
              <option value="샴">샴</option>
              <option value="아비시니안">아비시니안</option>
              <option value="러시안블루">러시안블루</option>
              <option value="터키시앙고라">터키시앙고라</option>
              <option value="페르시안">페르시안</option>
              <option value="아메리칸숏헤어">아메리칸숏헤어</option>
              <option value="메이쿤">메이쿤</option>
            </select>
          </li>
        </ul>
        <button onClick={catLogin}>저장하기</button>
      </div>
    </div>
  )
}