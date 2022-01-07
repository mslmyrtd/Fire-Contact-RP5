import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaVBY_J0fsPBms3JAEKZ3QpAWfTfma8xE",
  authDomain: "fire-contact-7c52c.firebaseapp.com",
  databaseURL: "https://fire-contact-7c52c-default-rtdb.firebaseio.com",
  projectId: "fire-contact-7c52c",
  storageBucket: "fire-contact-7c52c.appspot.com",
  messagingSenderId: "480974932808",
  appId: "1:480974932808:web:c74890bf746534a80d817d",
};

const app = initializeApp(firebaseConfig);
export default app;
