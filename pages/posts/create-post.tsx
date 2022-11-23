import { useState } from "react";
import { Post } from "../../dto/post";
import { dbConnection } from "../../utils/util";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [post, setPost] = useState<Post>();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleImgChange = (e: any) => {
    setImage(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e: any) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const _post: Post = {
      title,
      img: image,
      content,
      author,
    };
    setPost(_post);
  };

  return (
    <main>
      <h2>Create new Article</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <label>Image</label>
        <input type="text" value={image} onChange={handleImgChange} />
        <label>Content</label>
        <textarea rows={10} value={content} onChange={handleContentChange} />
        <label>Author</label>
        <input type="text" value={author} onChange={handleAuthorChange} />
      </form>
    </main>
  );
};

export default CreatePostPage;
