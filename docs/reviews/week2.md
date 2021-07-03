# 2주차 리뷰

## 9강 리뷰
### Axios, Fetch 차이점
1. axios
   - 구형 브라우저를 지원한다.
   - 응답시간 초과를 설정하는 방법이 있다.
   - JSON데이터 자동변환이 가능하다.
   - node.js에서의 사용이 가능하다
   - request aborting (요청취소)가 가능하다
   - catch에 걸렸을 때, .then을 실행하지 않고, .console창에 해당 에러 로그를 보여준다.
   - return 값은 Promise 객체 형태이다.


2. fetch
   - 자바스크립트 내장 라이브러리이기 때문에 import하지 않고 사용할 수 있다.
   - 라이브러리의 업데이트에 따른 에러 방지가 가능하다 ( React Native의 경우 업데이트가 잦아서 라이브러리가 쫓아오지 못하는 경우가 많은데, fetch의 경우 이를 방지할 수 있다.)
   - 네트워크 에러가 발생했을 때 기다려야 한다. (reponse timeout API 제공 x)
   - 지원하지 않는 브라우저가 있다.
   - return 값은 Promise객체 형태이다.
   
### issue

1. Mongodb 가 원할히 접속되지 않던 문제.
* 출처: https://dream-frontend.tistory.com/382