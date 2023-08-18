import Link from "next/link"

export default function Posts() {
  return(
    <div className="search">
      <div>
        <h2>냥질문에서 집사들과 소통해보세요</h2>
        {/* <form>
          <input type="text" placeholder="고양이 사료 어떻게 해야 할까요?" />
          <button><i className="ri-search-line"></i></button>
        </form> */}
        <Link className="subBtn" href="/posts">질문하러 가기</Link>
      </div>
    </div>
  )
}