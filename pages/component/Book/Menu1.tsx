import HeadComponent from "../Head"
export default function Menu1() {
  return(
    <div className="content menu1">
      <HeadComponent />
      <h2>품종별 성격</h2>
      <ul>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat1.jpg" alt="" />
          </div>
          <div>
            <h3>코숏</h3>
            <p>
              털의 색과 패턴으로 턱시도, 치즈, 고등어, 삼색이, 카오스 등 귀여운 이름으로 구분합니다 운동량이 많아 활발한 편이며 집사에 대한 애정이 깊고 애교가 많습니다 (특히 치즈냥이)
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat2.jpg" alt="" />
          </div>
          <div>
            <h3>샴</h3>
            <p>
              아깽이 때에는 흰색에 가까운 털 색을 가지지만 자라면서 털 색이 점점 짙어집니다
              감수성이 예민한 편이며 종종 관심을 끌려고 신경질적인 반응을 보이곤 합니다 이럴때 안아주거나 쓰다듬어 주면 좋아합니다
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat3.jpg" alt="" />
          </div>
          <div>
            <h3>아비시니안</h3>
            <p>
              이집트, 에티오피아 품종의 우아하고 아름다운 고양이입니다
              충성심이 강하며 집사를 잘 따르는 편이며 활동적이고 민첩하여 주변 환경에 관심이 많은 개냥이입니다
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat4.jpg" alt="" />
          </div>
          <div>
            <h3>러시안블루</h3>
            <p>
              블루 그레이의 털색을 가진 매력적인 고양이입니다
              예민하고 수줍은 편으로 사람과 교감을 잘하고 애교가 많은 친절하고 얌전한 고양이입니다 (개냥이 확률 높음)
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat5.jpg" alt="" />
          </div>
          <div>
            <h3>터키시앙고라</h3>
            <p>
              장모종으로 오드아이와 블루아이를 가지고 태어날 수 있는데 블루아이는 귀가 들리지 않는 경우가 있습니다
              충성심이 강하지만 고집이 센 편으로 타인에게 마음을 쉽게 주지 않는 도도한 고양이입니다
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat6.jpg" alt="" />
          </div>
          <div>
            <h3>페르시안</h3>
            <p>
              장모종으로 순종 페르시안 고양이와 터키시 앙고라와 교배한 페르시안 친칠라가 있습니다
              세계적으로 인기가 많은 종으로 조용하고 얌전해서 고양이 계의 귀부인으로 불리고 있습니다
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat7.jpg" alt="" />
          </div>
          <div>
            <h3>아메리칸숏헤어</h3>
            <p>
              유럽과 미국의 집고양이로 얼굴과 체형이 동그란 편입니다
              활발하고 집사를 잘 따르는 친절한 고양이지만 자존심이 강하고 사람과 일정한 거리를 유지하는 편입니다
            </p>
          </div>
        </li>
        <li>
          <div className="img">
            <img src="/assets/img/book_cat8.jpg" alt="" />
          </div>
          <div>
            <h3>메이쿤</h3>
            <p>
              장모종의 대형 종으로 고양이 중 가장 큰 고양이로 유명합니다
              활동적인 성격을 갖고 있으며 온화하고 애교스러워 인기가 많은 고양이입니다
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}