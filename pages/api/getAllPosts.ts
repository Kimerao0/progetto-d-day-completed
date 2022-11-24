import { NextApiRequest, NextApiResponse } from "next";

function getAllPosts(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "posts retrived" });
}

export default getAllPosts;
