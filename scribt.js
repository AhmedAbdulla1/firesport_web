import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js"


  
// 🔹 تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 دالة لإضافة بيانات
const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "test",
      age: 22
    });
    console.log("تمت إضافة المستخدم، ID:", docRef.id);
  } catch (error) {
    console.error("خطأ:", error);
  }
};

addUser()