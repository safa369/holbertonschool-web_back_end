export default function
handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'Success',
  };
  return promise
    .then(() => obj)
    .catch((Error) => console.log(Error))
    .finally(() => console.log('Got a response from the API'));
}
