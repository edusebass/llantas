const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_apiKey,
    authDomain: import.meta.env.REACT_APP_authDomain,
    projectId: "llantas-db",
    storageBucket: import.meta.env.REACT_APP_storageBucket,
    messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
    appId: import.meta.env.REACT_APP_appId,
    measurementId: import.meta.env.REACT_APP_measurementId
};

export default firebaseConfig;