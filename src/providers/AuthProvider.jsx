import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, confirmPassword) => {
		setLoading(true);
		return createUserWithEmailAndPassword(
			auth,
			email,
			password,
			confirmPassword
		);
	};
    const signIn = (email, password) => {
        setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
    const googleSignIn = () => {
        setLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignIn = () => {
        setLoading(true);
		const githubProvider = new GithubAuthProvider();
		return signInWithPopup(auth, githubProvider);
	};
    const logOut = () => {
        setLoading(true);
		return signOut(auth);
	};

    useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			console.log("user in the state changed", currentUser);
			setUser(currentUser);
            setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

    const authInfo = {user, loading, createUser, signIn, googleSignIn, githubSignIn, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node,
};
