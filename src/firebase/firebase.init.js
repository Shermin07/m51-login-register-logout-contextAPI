
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG49PEuoYOkqKM_P3zVJcqv3-b2KQPyh4",
  authDomain: "m51-lgin-regis-lgout-context.firebaseapp.com",
  projectId: "m51-lgin-regis-lgout-context",
  storageBucket: "m51-lgin-regis-lgout-context.appspot.com",
  messagingSenderId: "392219344984",
  appId: "1:392219344984:web:8c63bf3007061b5bcb8a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;

