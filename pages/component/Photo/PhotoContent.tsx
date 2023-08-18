import { useState, useEffect } from "react"

type Photo = {
  id: string,
  title: string,
  img: string,
}

type Modal = {
  modal: boolean;
  setModal: (modal: boolean) => void; //setModal 함수가 소품으로 전달된다고 가정
};

export default function PhotoContent({modal, setModal}: Modal) {
  const [photo, setPhoto] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('/api/photo')
    .then((res) => res.json())
    .then((data) => {
      setPhoto(data)
    })
    .catch((err) => {
      alert('갤러리를 불러올 수 없습니다');
      console.log(err);
    })
  }, [])

  const btnClick = () => {
    setModal(true);
  }

  return(
    <div className="photocontent">
      <div className="title">
        <h2>예쁜 냥이를 마구마구 자랑해주세요</h2>
        <button onClick={btnClick} className="subBtn">우리 냥이도 자랑하기</button>
      </div>
      <ul>
        {photo.map(photo => (
          <li key={photo.id}>
            <div className="back"></div>
            <p>{photo.title}</p>
            <div className="img"><img src={photo.img} alt="" /></div>
          </li>
        ))}
      </ul>
    </div>
  )
}