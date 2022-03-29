import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      {/* <img src="/favicon.ico" alt="logo" /> */}
      <Header as="h1">헤더</Header>
      <Gnb />
    </div>
  );
}
