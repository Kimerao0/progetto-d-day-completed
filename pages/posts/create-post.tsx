import * as React from "react";
import { Post } from "../../dto/post";

const CreatePostPage = () => {
  const [title, setTitle] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost: Post = {
      title: title,
      image: image,
      content: content,
      author: author,
    };
    fetch("http://localhost:3000/api/create-post", {
      method: "POST",
      body: JSON.stringify({ ...newPost }),
    });
  };

  return (
    <main>
      <h2>Create new Article</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={handleTitleChange} id="title" />
        <label htmlFor="image">Image</label>
        <input type="text" value={image} onChange={handleImgChange} id="image" />
        <label htmlFor="content">Content</label>
        <textarea rows={10} value={content} onChange={handleContentChange} id="content" />
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={handleAuthorChange} id="author" />
        <button type="submit">Create article</button>
      </form>
    </main>
  );
};

export default CreatePostPage;
