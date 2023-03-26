import firebaseAdmin from '../config/firebaseAdmin.js'

export default async function getAllUsers() {
  let userRecords = [];

  await firebaseAdmin.auth().listUsers(1000)
    .then((listUsersResult) => {
      userRecords = userRecords.concat(listUsersResult.users);
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
  return userRecords;
}

