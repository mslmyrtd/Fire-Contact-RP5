import app from "./firebase";

import { getDatabase, ref, push, set } from "firebase/database";
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
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return { isLoading };
};
