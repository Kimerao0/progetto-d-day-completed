import React from "react";

const UserIdPage = (props: any) => {
  return (
    <div>
      <h2>{props.user}</h2>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { params, req, res } = context;
  return {
    props: {
      user: params.uid,
    },
  };
}

export default UserIdPage;
