import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()]).then(
    (response) => (
      {
        photo: response[0],
        user: response[1],
      }
    ),
    () => ({
      photo: null,
      user: null,
    }),
  );
}
