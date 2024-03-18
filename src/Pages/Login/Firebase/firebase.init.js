// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
// const initializeAuthentication = () => {
//   initializeApp(firebaseConfig);
// };

// export default initializeAuthentication;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAaMq7RLLdPNv6Gwzb69sv2Nxz8y8X0CN4",
//   authDomain: "tour-b34a0.firebaseapp.com",
//   projectId: "tour-b34a0",
//   storageBucket: "tour-b34a0.appspot.com",
//   messagingSenderId: "832373240872",
//   appId: "1:832373240872:web:002d1cbc8346d931f1711d",
//   measurementId: "G-FSREEWPKQ9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// initializeAuthentication.js

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMq7RLLdPNv6Gwzb69sv2Nxz8y8X0CN4",
  authDomain: "tour-b34a0.firebaseapp.com",
  projectId: "tour-b34a0",
  storageBucket: "tour-b34a0.appspot.com",
  messagingSenderId: "832373240872",
  appId: "1:832373240872:web:002d1cbc8346d931f1711d",
  measurementId: "G-FSREEWPKQ9"
};

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
