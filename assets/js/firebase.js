import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 🔹 تهيئة Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3hgVF0VctPHjVWHW7E0r4Ed9pTaH6yFo",
  authDomain: "firebox-349ab.firebaseapp.com",
  projectId: "firebox-349ab",
  storageBucket: "firebox-349ab.appspot.com",
  messagingSenderId: "144165828319",
  appId: "1:144165828319:web:677a4d751868516b0ddb6a",
  measurementId: "G-HZMZEP4W20",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// 🔹 دالة لإضافة بيانات
const addUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("تمت إضافة المستخدم، ID:", docRef.id);
  } catch (error) {
    console.error("خطأ:", error);
  }
};
export { addUser };
// addUser(userData)
