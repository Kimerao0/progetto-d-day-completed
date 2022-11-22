import { useRouter } from "next/router";

const SingleAuthorPage = () => {
  const router = useRouter();
  return <div>{router.query.authorId}</div>;
};

export default SingleAuthorPage;
