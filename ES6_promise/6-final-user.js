import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo])
    .then((values) => {
      const result = [];
      values.forEach((values) => {
        if (values.status === 'fulfilled') {
          result.push({ status: values.status, value: values.value });
        } else {
          result.push({ status: values.status, reason: values.reason });
        }
      });
      return result;
    });
}
