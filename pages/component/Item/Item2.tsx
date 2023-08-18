import Link from "next/link"
import HeadComponent from "../Head"
export default function Item2() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item2.jpg" alt="" />
        <div>
          <ul>
            <li><h2>부드러운 캣타워</h2></li>
            <li><p>부드러운 촉감을 좋아하는 냥이에게 베스트</p></li>
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
                부드럽고 퀄리티 좋아요 추천!
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