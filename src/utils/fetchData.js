export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5f82c49628msh041229aee7d8631p1b8d99jsnf2ae9c4255af",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  const data = await res.json();
  console.log(data);
  return data;
};
