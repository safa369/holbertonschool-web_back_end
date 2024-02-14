export default function handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(obj);
    } else {
      reject();
    }
  })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    });
}
