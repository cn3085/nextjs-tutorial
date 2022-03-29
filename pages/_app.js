import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/component/Top.js";
import Footer from "../src/component/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환시 레이아웃 유지
 * 페이지 전환시 상태값 유지
 * componentDidCatch를 이용해 커스텀 에러 핸들링
 * 추가적인 데이터를 페이지로 주입시켜주는 게 가능
 * 글로벌 css를 이곳에 선언
 */
