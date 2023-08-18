import Link from "next/link"
import HeadComponent from "../Head"
export default function Item6() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item6.jpg" alt="" />
        <div>
          <ul>
            <li><h2>고양이 케어 세트</h2></li>
            <li><p>세트 상품을 기획가에 만나보세요</p></li>
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
                세트 상품이라 가성비가 좋은 것 같아요!
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