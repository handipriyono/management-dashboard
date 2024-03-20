import AxiosAPI from "../helpers/axios";
const postLogin = async () => {
  try {
    const response = await AxiosAPI.get("https://reqres.in/api/login");
    return response;
  } catch (error) {
    console.error(error);
  }
};
export { postLogin };
