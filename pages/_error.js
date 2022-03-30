export default function Error({ statusCode }) {
  return (
    <>
      {statusCode
        ? `error ${statusCode} occurred on server`
        : "error occurred on client"}
    </>
  );
}

//이 페이지는 정적으로 제공하지 않는다

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
