import Link from "next/link"
import HeadComponent from "../Head"
export default function Item7() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item7.jpg" alt="" />
        <div>
          <ul>
            <li><h2>프리미엄 원목 캣타워</h2></li>
            <li><p>좋은 원목 재질로 오래 사용할 수 있어요</p></li>
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
                싸구려 쓰다가 바꿨는데 확실히 다르네요..
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