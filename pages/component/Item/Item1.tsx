import Link from "next/link"
import HeadComponent from "../Head"
export default function Item1() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item1.jpg" alt="" />
        <div>
          <ul>
            <li><h2>푹신한 에그타르트 쿠션</h2></li>
            <li><p>실시간 1위! 우리 냥이의 귀여운 포토존</p></li>
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
                고민하다가 구매했는데 너무 귀엽고 예뻐요
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