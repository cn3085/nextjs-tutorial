import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * 서버에서만 렌더링 되고 onclick 등 작동하지 않음
 * css도 여기서 사용하지 않음
 */
