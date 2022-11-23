import React from "react";
import { getData } from "../../utils/functions";

const PostsPage = (props: any) => {
  return (
    <div className="page">
      <h2>Posts Page</h2>
      <ul>
        {props.posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const data = await getData();

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (data && data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
    revalidate: 10,
  };
}

export default PostsPage;
