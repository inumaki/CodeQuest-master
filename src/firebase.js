import { initializeApp } from "firebase/app"
import { getFirestore,initializeFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDwBLAuzqITuNEUXHm_1VlESoky3FLreZc",
    authDomain: "codequest-9a884.firebaseapp.com",
    projectId: "codequest-9a884",
    storageBucket: "codequest-9a884.appspot.com",
    messagingSenderId: "426849210048",
    appId: "1:426849210048:web:c392e77d92defb3b8a2725",
    measurementId: "G-E3N1NPD686"
  };

  const app = initializeApp(firebaseConfig)
//  const db = getFirestore(app)
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false, // and this line
  })


  export {db}
