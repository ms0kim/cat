import Link from "next/link"
import HeadComponent from "../Head"
export default function Item4() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item4.jpg" alt="" />
        <div>
          <ul>
            <li><h2>기린 스크래처</h2></li>
            <li><p>구멍으로 놀아줄 수 있는 스크래처</p></li>
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
                색감이 톡톡 튀어서 더 귀여운 것 같아요
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