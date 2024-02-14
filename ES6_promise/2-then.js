export default function handleResponseFromAPI() {
  const obj = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve) => {
    resolve(obj);
  })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    });
}
