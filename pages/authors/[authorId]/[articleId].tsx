import { useRouter } from "next/router";

const SingleArticleByAuthorPage = () => {
  const router = useRouter();

  return <div>{router.query.articleId}</div>;
};

export default SingleArticleByAuthorPage;
