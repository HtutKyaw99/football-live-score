import axios from "axios";

export const fetchData = async () => {
  try {
    const resp = await axios.get("http://localhost:5000/api/matches");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
