// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCXI4laqSUc54xT4GR4i6616Ll_gczE1R0",
	authDomain: "tech-and-gaming-event.firebaseapp.com",
	projectId: "tech-and-gaming-event",
	storageBucket: "tech-and-gaming-event.appspot.com",
	messagingSenderId: "789154528664",
	appId: "1:789154528664:web:f7f55c08b5b6317da0bfed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;