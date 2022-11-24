import { MongoClient } from "mongodb";
import { dbConnection } from "../../utils/util";
import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../dto/post";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const newPost: Post = {
      title: body.title,
      content: body.content,
      image: body.image,
      author: body.author,
    };
    const client = await MongoClient.connect(dbConnection);
    const db = client.db();
    await db.collection("posts").insertOne({ ...newPost });
    client.close();
    res.status(201).json({ message: "Post created!" });
  }
}

export default handler;
