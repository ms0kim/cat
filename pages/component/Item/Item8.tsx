import Link from "next/link"
import HeadComponent from "../Head"
export default function Item8() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item8.jpg" alt="" />
        <div>
          <ul>
            <li><h2>미니 공룡 스크래처</h2></li>
            <li><p>소파처럼 쉴 수 있는 스크래처</p></li>
            <li className="review">
              <span>최근리뷰</span>
              <span>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </span>
              <p>
                스크래처가 너무 귀여워요 강추합니다!
              </p>
            </li>
          </ul>
          <div className="btns">
            <Link className="subBtn" href="/item">목록으로</Link>
            <button disabled>사러가기 준비중</button>
          </div>
        </div>
      </div>
    </div>
  )
}