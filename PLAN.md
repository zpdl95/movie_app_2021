0. npm install npx -g
1. npx create-react-app foldername
2. git init
3. 깃 레포지터리 생성
4. git remote add origin 레포지터리주소
5. git add .
6. git commit -m "제목"
7. git push origin main
8. npm i prop-types 내가 속성을 사용할때 가져오는 속성값과 사용할 속성값이 같은지 확인해줌
9. npm i gh-pages 깃허브에 배포하기위해서 이것을 설치
10. npm run build를 해서 build폴더 생성
11. package.json에 homepage 주소를 입력
12. npm i react-router-dom 네비게이션을 만들어주는 패키지


implicit return -> 함수작성시 리턴할값을 한줄에 적으면 return을 사용하지 않아도 return해줌.
arrow function -> 함수작성시 {}를 사용하면 return을 작성해야 하지만 ()만 사용하면 return을 사용하지 않아도 ()안의 내용을 객체로 만들어 return해줌.

map()함수는 key인자를 받아야한다. 컴포넌트에 직접 key인자를 넘겨줄 수도 있고 or map(_,index)처럼 함수가 제공하는 두번째인자를 key값으로 사용가능.

Link컴포넌트를 사용하기 위해선 Router컴포넌트 안에 넣어서 사용해야한다.
Link to="/about" -> 과 같이 일반적인 사용법,
Link to={{pathname: "/about",
          search: "?sort=name",
          state: { isLoading: true }
        }} -> 과 같은 object형 사용법이 있다.

react-router는 route사용해서 페이지를 이동할때 해당 페이지로 몇개의 속성값을 전달한다.
