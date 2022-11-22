import Link from "next/link";
import React from "react";

const AuthorPage = () => {
  const authors = [
    {
      id: "1",
      name: "Fido",
    },
    {
      id: "2",
      name: "Fido2",
    },
  ];

  return (
    <div>
      <h2>Author Page</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link
              href={{
                pathname: "/authors/[id]",
                query: { id: author.name },
              }}
            >
              <p>{author.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorPage;
