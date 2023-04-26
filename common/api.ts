const BASE_URL = "http://api.local:3001";

async function post(path: String, body: Object) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(res.status);
}

export default {
  post: post,
};
