# 실전 웹퍼블리싱 커리큘럼

## HTML, 이건 꼭 알고가자
### DOCTYPE
- 문서 형식을 나타낸다. 이 문서는 html 문서이다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <p>This is my page</p>
    <script src="/js/common.js"></script>
  </body>
</html>
```

### HTML TAG list
- header > 헤더
- main > 주요 콘텐츠
- footer > 푸터
- nav > 메뉴, 네비게이션
- article > 콘텐츠 묶음
- section > 영역 분리
- aside > 주 내용과 연관이 있으나 필수가 아닌 경우
- ul li > 순서없는 목록
- ol li > 순서있는 목록
- dl dt dd > 정의형 목록
- p > 문단, 문장
- br > 줄바꿈
- div > 의미없는 블럭
- span > 의미없는 태그
- strong > 강조
- em > 강조
- a > 링크
- figure figcaption > 이미지나 차트 등을 설명하는 문구

### 작성 시 주의할 내용
- 스크립트는 페이지 최하단에 위치하도록 (로드포함)
- id는 중복사용불가, class는 중복사용 가능, 때문에 스타일을 위한 id사용은 지양
- 코드블럭별 들여쓰기 (가독성)
- inline 스타일 작성은 지양

---
## CSS, 이건 꼭 알고가자
- 대부분의 속성이 실제로도 사용됨

### 레이아웃 필수
- block, inline
- position (fixed, relative, absolute)
- float (zoom)
- flex(*)
- line-height
- 가상클래스 ::after, ::before, :nth-child, :first-child, :last-child
- vendor prefix -moz-, -webkit-, -o-, -ms-, '' (box-shadow, border-radius...)
- 세로정렬 layout > (absolute 50%, margin-top), (absolute 50%, transform:translate), (table-cell, vertical-align:middle)
- 미디어쿼리 > 
  - file load(<link rel="stylesheet" media="screen and (max-width: 768px)" href="mystyle.css" /> (768px 이하일때 해당 css로드)
  - css 내부 @media screen and (max-width: 768px) {color:...} (768px 이하일때 스타일 적용)

---
## 자바스크립트, 이건 꼭 알고가자

### UI개발 필수
- 변수
- 함수
- loop (반복)
- if (조건)
- scope (범위)
- DOM선택
...

### 플러그인, 라이브러리 사용 (응용)
- 플러그인 (컴포넌트) modal, slider...
- 라이브러리 (비슷한 성격을 가진 컴포넌트들의 집합체) jQuery..
- 웹에서 자주 쓰이는 플러그인 > swiperjs, chartjs
- 샘플 가져와서 사용하기

---
## 유용한 사이트 
- 테스트 코드 작성(샘플) > https://www.jsfiddle.net
- 웹사이트 트렌드 > CSSDA > https://www.cssdesignawards.com/
- 

---
## 실제 레이아웃 실습
### PC ()

### Mobile ()

### Responsive (https://studio-jt.co.kr/)