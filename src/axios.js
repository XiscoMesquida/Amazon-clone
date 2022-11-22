import axios from "axios";

const instance = axios.create({

  baseURL: 'http://127.0.0.1:5001/clone-d6e85/us-central1/api'

});

export default instance;


//https://clone-d6e85-default-rtdb.europe-west1.firebasedatabase.app

//https://us-central1-clone-d6e85.cloudfunctions.net/api