
import { changeTheme } from "./index.js";

changeTheme();

const firebaseConfig = {
    apiKey: "AIzaSyCJwPz8g3mSrtoOllv5t1XUjfCOtOfEFkE",
    authDomain: "cogno-solution.firebaseapp.com",
    databaseURL: "https://cogno-solution-default-rtdb.firebaseio.com",
    projectId: "cogno-solution",
    storageBucket: "cogno-solution.appspot.com",
    messagingSenderId: "132297251528",
    appId: "1:132297251528:web:6b4d11b1ffc5db790fe3fd",
    measurementId: "G-GE4E9MSXRH"
  };


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();






