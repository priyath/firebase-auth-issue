import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
 // firebase configs
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return auth
        .signInWithPopup(googleProvider)
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error(error.message);
            return false;
        });
};

auth.onAuthStateChanged((user) => {
    console.log('auth state changed: ', user);
});

export {
    auth,
    loginWithGoogle,
};
