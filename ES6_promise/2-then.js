export default function handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve) => {
    if (promise) {
      resolve(obj);
    }
  })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
