import Axios from "axios";
import { useEffect, useState } from "react"
import { useRouter} from 'next/router'
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({item}) => {
  return (
    <>
      {item &&
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>}
    </>);
}

export default Post;

export async function getServerSideProps(context){
  const id = context.params.id;
  const API_URL =
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    props : {
      item : data
    }
  }
  
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
