import Link from "next/link"

export default function SubMenu() {
  return(
    <div className="submenu">
      <ul>
        <li>
          <Link href="/login">
            <div>
              <img src="/assets/img/logo.png" alt="" />
            </div>
            <p>우리냥이</p>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <div>
              <img src="/assets/img/fish.png" alt="" />
            </div>
            <p>냥템베스트</p>
          </Link>
        </li>
        <li>
          <Link href="/menu1">
            <div>
              <img src="/assets/img/foot.png" alt="" />
            </div>
            <p>냥이정보</p>
          </Link>
        </li>
        <li>
          <Link href="posts">
            <div>
              <img src="/assets/img/book.png" alt="" />
            </div>
            <p>질문하기</p>
          </Link>
        </li>
        <li>
          <Link href="photo">
            <div>
              <img src="/assets/img/photo.png" alt="" />
            </div>
            <p>자랑하기</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}