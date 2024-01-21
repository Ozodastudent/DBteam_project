import axios from "axios";
import { useMutation } from "react-query";

function usePost(
  link,
  type,
  datas,
  id
) {
  const request = async () => {
    console.log("envv", import.meta.env.MODE);
    let data;

    if (type === "order") {
      data = await axios.post(import.meta.env + link, datas, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      });
    } else {
      data = await axios.post(import.meta.env.MAIN_ULR + link, datas);
    }

    return data;
  };

  return useMutation(id, request, {});
}

export default usePost;
