const API_key = "e90ec9f77da1435dbcdcc706b165a99d";

export default async function getreversegeocodingaPI(lat, lng) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lng}&key=${API_key}`
  );
  const data = await res.json();
  console.log(lat, lng);

  return data;
}
