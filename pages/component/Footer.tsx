import Link from "next/link"

export default function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li className='logo'>
          <img src="/assets/img/logo.png" alt="" />
          <h3>냥집사즈</h3>
        </li>
        <li>
          <p>Copyright © 2023 냥집사즈 All rights reserved</p>
          <p>Design by Song</p>
        </li>
      </ul>
      <div>
        <ul>
          <li><Link href="/item">냥템추천</Link></li>
          <li><Link href="/menu1">냥사전</Link></li>
          <li><Link href="/posts">냥질문</Link></li>
          <li><Link href="/photo">냥자랑</Link></li>
        </ul>
      </div>
    </div>
  )
}