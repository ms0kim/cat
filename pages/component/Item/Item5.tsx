import Link from "next/link"
import HeadComponent from "../Head"
export default function Item5() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item5.jpg" alt="" />
        <div>
          <ul>
            <li><h2>완벽한 각도 사료 그릇</h2></li>
            <li><p>냥이가 편하게 먹을 수 있는 각도!</p></li>
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
                진작에 사줄 걸 그랬어요ㅠㅠ 편하게 먹네요
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