import { getData } from "../../utils/functions";

const SingoloArticolo = (props: any) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const useParams = context.params.id;
  const data = await getData();
  const post = data.posts.find((post: any) => post.id === useParams[0]);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.posts.map((post: any) => post.id);
  const paths = ids.map((id: any) => ({ params: { id: [id] } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default SingoloArticolo;
