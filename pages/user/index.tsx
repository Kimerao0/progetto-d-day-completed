import React from "react";

const UserPage = (props: any) => {
  return (
    <div>
      <h2>{props.user.username}</h2>
    </div>
  );
};

export default UserPage;

export async function getServerSideProps(context: any) {
  const { params, req, res } = context;
  return {
    props: {
      user: {
        username: "Ale",
      },
    },
  };
}
