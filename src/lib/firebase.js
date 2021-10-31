import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBUxhHrHSap7dT3YnI2TZF2vNkbpWBDZWs',
	authDomain: 'simpletodo-react.firebaseapp.com',
	projectId: 'simpletodo-react',
	storageBucket: 'simpletodo-react.appspot.com',
	messagingSenderId: '823792397888',
	appId: '1:823792397888:web:c6ba6899eef8284b18b9a5',
};

const firebase = Firebase.initializeApp(firebaseConfig);
const auth = Firebase.auth();
const firestore = Firebase.firestore();

export { firebase, auth, firestore };
