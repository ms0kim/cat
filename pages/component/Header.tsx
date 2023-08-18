import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(props:any) {
  const [catname, setCatname] = useState('');

  useEffect(() => {
    const storedCatInfo = localStorage.getItem('catInfo');
    if(storedCatInfo) {
      const parsedCatInfo = JSON.parse(storedCatInfo);
      setCatname(parsedCatInfo.catname);
    }
  }, []);

  return(
    <div className="header">
      <ul className={props.hide ? 'hide' : ''}>
        <li className='left'>
          <Link href='/'>
            <img src="/assets/img/logo.png" alt="" />
            <h3>냥집사즈</h3>
          </Link>
          <div className="center">
            <Link href='/item'>냥템추천</Link>
            <Link href='/book/menu1'>냥사전</Link>
            <Link href='/posts'>냥질문</Link>
            <Link href='/photo'>냥자랑</Link>
          </div>
        </li>
        <li className='right'>
          <Link href="/photo" className="subBtn">사진 올리기</Link>
          {catname ? (
            <Link className="btn" href="/login">{catname} 집사님</Link>
          ) : (
            <Link className="btn" href="/login">냥집사즈 시작하기</Link>
          )}
        </li>
      </ul>
    </div>
  )
}