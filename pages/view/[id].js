import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item, name }) => {
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

export async function getServerSideProps(context) {
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
