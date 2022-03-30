import Head from "next/head";
import Axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>Home / next</title>
      </Head>
      {/* {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading...
          </Loader>
        </div>
      )} */}
      {/* {!isLoading && ( */}
      <>
        <Header as="h3">베스트 상품</Header>
        <Divider />
        <ItemList list={list} />
      </>
      {/* )} */}
    </div>
  );
}

//정적 페이지 생성
export async function getStaticProps() {
  //여기는 node 환경
  //서버에서 돌아가는 코드이고 window 같은 거 쓰면 에러 남
  const apiUrl = process.env.apiUrl;
  console.log(apiUrl);
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
