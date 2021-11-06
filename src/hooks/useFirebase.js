import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

//initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [msg, setMsg] = useState('');


    const auth = getAuth();

    //create user with pass/ register user
    const registerUser = (registerData, history) => {
        setIsLoading(true)
        const { name, email, password } = registerData;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                user.displayName = name;
                //userName and photo url set
                const photourl = 'https://casperkruger.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png';
                updateUser(name, photourl);

                setUser(user)
                setMsg('');
                //redirect home page 
                history.replace('/');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMsg(errorMessage)
                // ..
            }).finally(() => setIsLoading(false));

    }
    const updateUser = (name, photourl) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }

    //login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setUser(user);
                setMsg('');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(() => setIsLoading(false));
    }

    // sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                //redirect previous page after successfully login
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setMsg(errorMessage);
                // ...
            }).finally(setIsLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    //signOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setMsg('');
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }
    return {
        isLoading,
        user,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        msg,


    }
}

export default useFirebase;