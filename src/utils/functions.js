import app from "./firebase";

import { getDatabase, ref, push, set } from "firebase/database";

export const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "contact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.userName,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};
console.log("veri ekledni");
