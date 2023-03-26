import firebaseAdmin from '../config/firebaseAdmin.js'

export default async function deleteUserByUid(uid) {
  await firebaseAdmin.auth().deleteUser(uid).then(() => {
    return 'User deleted successfully';
  }).catch((error) => {
    return error;
  });
}

