import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Item from "../../src/component/Item";
import Head from "next/head";
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading..
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths(context) {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: "495" } },
    //   { params: { id: "488" } },
    //   { params: { id: "477" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
    //false면 없는 페이지는 대응해주지 않음
    //true면 없는 페이지는 런타임에 백그라운드에서 정적생성해줌
    //두번째 요청부터는 정적으로 생성한 페이지 응답
    //next Link를 쓰면 fetch?가 default true임
    //이게 무슨 의미냐면 화면을 스크롤 할 때 해당 Link가 화면에 나오면
    //그것도 미리 서버에 렌더링을 해놓는다는 의미
    //그래서 스크롤에 포함된 페이지도 로딩이 빨리 됨
  };
}

export async function getStaticProps(context) {
  //여기는 node 환경
  //서버에서 돌아가는 코드이고 window 같은 거 쓰면 에러 남
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
// export default function Id() {
//   return (
//     <div>
//       <h3>다이나믹 라우트 지원</h3>
//       <p>/view/1</p>
//       <p>/view/바보</p>
//     </div>
//   );
// }
