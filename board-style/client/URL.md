# SpringBoot REST API
- 목록 : /boards            [GET]
- 조회 : /boards/10         [GET]
- 등록 : /boards            [POST]
- 수정 : /boards            [PUT]
- 삭제 : /boards/10         [DELETE]

# React 라우팅
- 메인 : /                  - Home
- 목록 : /boards            - board/List
- 조회 : /boards/10         - board/Raed
- 등록 : /boards/insert     - board/Insert
- 수정 : /boards/Update/10  - board/Update

components = > 뷰페이지의 각 프레임들
containers = > components을 모으는 프레임
pages = containers 들의 모임
app.js = containers 들로 Link 이어주기

pages 단계에서 container로 props 내려주면
container에서 컨트롤러 작성 해 props다시 component로 내려줌.

<!-- param은 어떻게 받고받고 하는지 이해해야함 -->

# apis 
- boards.js

axios 라이브러리
- 설치 : npm install axios

사용방법
- import : import axios from 'axios';
- GET    : axios.get("경로")
- POST   : axios.post("경로", {데이터})
- PUT    : axios.put("경로", {데이터})
- DELETE : axios.delete("경로")
