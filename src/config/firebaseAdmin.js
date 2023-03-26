import admin from "firebase-admin";

import serviceAccountKey from "../../serviceAccountKey.json" assert { type: "json" };

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});

export default app;