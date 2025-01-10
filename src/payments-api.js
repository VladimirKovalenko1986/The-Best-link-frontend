import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const getPayments = async () => {
  const response = await axios.get("/search", {
    params: {
      query: "react",
      hitsPerPage: 10,
    },
  });

  return response.data.hits;
};

export const getPaymentId = async (id) => {
  const response = await axios.get(`/items/${id}`);
  return response.data;
};
