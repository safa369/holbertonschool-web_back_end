import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    let UP = signUpUser(firstName, lastName);
    let PR = uploadPhoto(fileName);
    Promise.allSettled([UP, PR])
    .then(values => console.log(values))
    .catch(error => console.error(error));
}