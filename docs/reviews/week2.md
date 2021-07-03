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
   
## 10강 리뷰

1. router 란?
   - 둘 혹은 그 이상의 네트워크와 네트워크 간 데이터 전송을 위해 최적 경로를 설정해주며 데이터를 해당 경로를 따라 한 통신망에서 다른 통신망으로 통신할 수 있도록 도와주는 인터넷 접속 장비이다.
   - 즉, 네트워크를 통해 정보를 주고 받을 때 데이터에 담긴 수신처의 주소를 읽고 가장 적절한 통신통로를 이용해 다른 통신망으로 전송하는 장치로, 전화국의 교환기와 비슷한 개념이다.
     > 출처: https://sites.google.com/site/21herecomeputer/123123
   - **node.js** 에서 `router` 란 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말한다. 
     > 출처: https://velog.io/@new_wisdom/Node.js-7-Routing
   

## 11강 리뷰

## 12강 리뷰

## issue

1. [Mongodb 가 원할히 접속되지 않던 문제.](https://github.com/inflearn-react-study/movie-site/issues/2)

2. [login 을 할 경우 movie detail 페이지에 접속 안되던 문제.](https://github.com/inflearn-react-study/movie-site/issues/3)
   