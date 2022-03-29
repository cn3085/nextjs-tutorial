import Head from "next/head";
import Axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";


  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home / next</title>
      </Head>
      {isLoading && (
        <div style={{padding: "300px 0"}}>
          <Loader inline="centered" active>
            Loading...
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3">베스트 상품</Header>
          <Divider/>
          <ItemList list={list}/>
        </>
      )}
    </div>
  );
}
