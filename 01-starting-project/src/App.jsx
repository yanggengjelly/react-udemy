import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // Fragment 리턴할때 부모요소가 두개이상은 반환하지 못하기에
    // 불 필요한 div대신 Fragment를 대신 쓸수있음 개발자 도구엔 Fragment가 나오지않음

    //최신엔 빈 태그로 사용가능 Fragment 대안이기도함
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
