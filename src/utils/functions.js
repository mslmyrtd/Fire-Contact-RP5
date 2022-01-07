import app from "./firebase";

import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  query,
  remove,
  child,
} from "firebase/database";
import { useEffect, useState } from "react";

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

export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contact");
    onValue(query(userRef), (snapshot) => {
      const contacts = snapshot.val();
      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const deleteInfo = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, "contact");
  remove(ref(db, "contact/" + id));
};

export const update = (info) => {
  const db = getDatabase();
  const newUserKey = push(child(ref(db), "contact/")).key;
  const updates = {};
  updates["/contact/" + newUserKey] = info;
  return update(ref(db), updates);
};
