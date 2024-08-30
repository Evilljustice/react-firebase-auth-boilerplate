import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // add user to firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      createdAt: new Date()
    });

    return userCredential;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error("El correo electrónico ya está en uso.");
    } else if (error.code === 'auth/weak-password') {
      throw new Error("La contraseña debe tener al menos 6 caracteres.");
    } else {
      throw new Error("Error al crear el usuario: " + error.message);
    }
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      console.error("Usuario o contraseña incorrectos.");
      throw new Error("Usuario o contraseña incorrectos.");
    } else {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // add user to firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date()
    });

    return result;
  } catch (error) {
    console.error("Error during sign in with Google:", error);
    throw error;
  }
};


export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = async (email) => {
  await sendPasswordResetEmail(auth, email);
  return "Si existe una cuenta asociada a este correo, se ha enviado un mensaje.";
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
