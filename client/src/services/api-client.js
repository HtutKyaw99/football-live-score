import axios from "axios";

export const fetchData = async () => {
  try {
    const resp = await axios.get("https://hiki-fbfixtures.vercel.app/");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
