import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb'
export default async (req, res) => {
  try {
    // console.log(req.query);
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(req.query.postId) });
    res.json({ msg: "success", status: 200, result: movie });
  } catch (error) {
    console.error(error);
  }
};
