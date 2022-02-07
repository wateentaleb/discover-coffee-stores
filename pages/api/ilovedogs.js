export default function handler(req, res) {
  console.log({ req, res });

  //   const breed = res.query;
  console.log("req query", req.query);

  res.status(200).json({ message: `I love stuff` });
}
