import React, { useState } from "react"

type Photo = {
  id: string,
  title: string,
  img: string,
}

type Modal = {
  modal: boolean;
  setModal: (modal: boolean) => void; //setModal 함수가 소품으로 전달된다고 가정
};

export default function Upload({modal, setModal}: Modal) {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]){
      const file = e.target.files[0];
      const newPhoto: Photo = {
        id: Date.now().toString(),
        title: title,
        img: URL.createObjectURL(file), //파일 경로를 사용하여 이미지 URL 생성
      }
      setUploadFile(file);
    }
  };

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const imgUpload = async () => {
    if(!uploadFile || !title){
      alert('이미지와 제목을 입력해주세요');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadFile); //이미지 URL 추가
    formData.append('title', title);

    fetch('/api/photo', {
      method: 'POST',
      body: formData,
    })
    .then((res) => {
      if(res.ok){
        alert('이미지 업로드가 완료되었습니다');
        setUploadFile(null);
        setTitle('');
      } else{
        alert('이미지 업로드 준비중입니다')
      }
    })
    .catch((err) => {
      console.error('업로드 오류:', err)
    })
  }

  const modalClose = () => {
    setModal(false);
    setUploadFile(null);
    setFile('이미지를 첨부해주세요');
  }

  const [file, setFile] = useState('이미지를 첨부해주세요');
  const fileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.value);
  }

  return (
    <div className={`upload ${modal ? '' : 'lock'}`}>
      <div className="back"></div>
      <div className="modal">
        <div className="pop">
          <div className="first">
            <input className="file" placeholder="이미지를 첨부해주세요" value={file} />
            <label htmlFor="file">이미지 찾기</label>
            <input 
              type="file" 
              id="file" 
              accept="image/*" 
              onChange={(e) => {
                fileChange(e);
                fileName(e);
              }} 
            />
          </div>
          <input 
            className="text" 
            type="text" 
            placeholder="제목을 입력해주세요" 
            value={title} 
            onChange={titleChange} 
          />
          <div className="btns">
            <button className="subBtn" onClick={modalClose}>닫기</button>
            <button onClick={imgUpload}>업로드하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}