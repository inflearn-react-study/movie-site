## React 의 탄생 배경

- react 는 개발자가 DOM 을 직접 건드리면 코드가 난잡해지는 문제를 해결하기 위해 등장하였다.
- react 는 상태가 바뀌었을 때 DOM 을 업데이트 하는 것이 아니라, 업데이트 된 상태로 보여주자는 발상에서 시작한다.
- 이를 가능케한 것은 `[Virtual Dom` 이다.
- [Virtual Dom 이란?](#1.-Virtual-DOM-이란?)

> 출처: *[벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/01-concept.html)*



## useEffect 와 useState 알아보기

1. useEffect
    - 웹 어플리케이션의 컴포넌트 혹은 DOM 을 조작하는 일련의 동작들을 제공하는 `Hook`
    > [Using the Effect Hook](https://ko.reactjs.org/docs/hooks-effect.html)
    
2. useState
    - 컴포넌트가 업데이트가 되더라도 컴포넌트가 가진 상태를 저장하기 위해 쓰이는 `Hook`
    > [State Hook](https://ko.reactjs.org/docs/hooks-state.html)


## 용어 알아보기


### 1. Virtual DOM 이란?

- `Virtual DOM` 은 가상의 DOM 이다. 실제로 보여지는 DOM 이 아니라 메모리에 가상으로 존재한다.
- 이는 실제로 브라우저에서 DOM 을 보여주는 것보다 속도가 빠르다.
- 브라우저 상의 DOM 과 Virtual DOM 의 차이를 감지하여 업데이트를 한다. 
> 출처 : *[벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/01-concept.html)*

### 2. Hook
- Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다.
- Hook은 클래스 컴포넌트를 작성하지 않아도 [state](#3.-state) 와 같은 특징들을 사용할 수 있습니다.   
> 출처 : *[Hook 소개](https://ko.reactjs.org/docs/hooks-intro.html)*

### 3. state
- 컴포넌트에서 동적인 값을 `state` 라 한다.


### 4. side effect(effects)
- React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업을 이전에도 종종 해보셨을 것입니다.    
  우리는 이런 모든 동작을 “side effects”(또는 짧게 “effects”)라고 합니다
> 출처 : *[Effect Hook](https://ko.reactjs.org/docs/hooks-overview.html#effect-hook)*

## 참고 문서

- [React 공식 문서](https://ko.reactjs.org/docs/getting-started.html)
- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/01-concept.html) 







