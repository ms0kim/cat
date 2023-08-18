import Link from "next/link"
import HeadComponent from "../Head"
export default function Item3() {

  return(
    <div className="itemcon">
      <HeadComponent />
      <div>
        <img src="/assets/img/item3.jpg" alt="" />
        <div>
          <ul>
            <li><h2>원목 오가닉 코튼 해먹</h2></li>
            <li><p>냥이에게 특별한 해먹을 선물해주세요</p></li>
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
                해먹 너무 귀여워요.. 냥이가 잘 써주네요ㅠㅠ
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