import { ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { firebase } from '../main';

//Application state
const loggedIn = ref(false);
const admin = ref(false)
const currentUser = ref();

// Testarei an o user kanei login kai dinei access sto Topnav
export async function bindUser() { 
    onAuthStateChanged(getAuth(firebase), (user) => {
        if (user) {
            loggedIn.value = true;
            currentUser.value = user
            //TODO add check for admin
        }
        else {
            loggedIn.value = false;
            admin.value = false;
        }
    })
}

export function useAuth() {
    return {
        loggedIn,
        admin,
        currentUser
    }
}