import { fetchCoffeeStores } from "../../lib/coffee-stores";
const getCoffeeStoresByLocation = async (req, res) => {
  try {
    const { latLong, limit } = req.query;
    const response = await fetchCoffeeStores(latLong, limit);
    // respond with OK all good
    res.status(200);
    res.json(response);
  } catch (err) {
    // Internal server error
    res.status(500);
    console.log("This is an error", err);
    res.json({ message: "Something went wrong :(", err });
  }
};

export default getCoffeeStoresByLocation;
