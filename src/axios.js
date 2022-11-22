import axios from "axios";

const instance = axios.create({

  baseURL: 'https://clone-d6e85-default-rtdb.europe-west1.firebasedatabase.app'

});

export default instance;


//https://clone-d6e85-default-rtdb.europe-west1.firebasedatabase.app

//https://us-central1-clone-d6e85.cloudfunctions.net/api