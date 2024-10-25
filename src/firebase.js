import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDIRWmfz9enGzoqdjKPMOtLNQrIPOp3p2w",
  authDomain: "netflix-clone-9f8db.firebaseapp.com",
  projectId: "netflix-clone-9f8db",
  storageBucket: "netflix-clone-9f8db.appspot.com",
  messagingSenderId: "564622916817",
  appId: "1:564622916817:web:05805de9dce691b1ad59f0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const singup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, logout, singup };
