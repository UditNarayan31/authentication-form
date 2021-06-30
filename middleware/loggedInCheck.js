export default function ({ store, redirect }) {
  // If the user is not authenticated
  // Client-side
  if (store.getters['getState']) {
    console.log(store.getters['getUser'], "sss");
    //console.log(store.getters.getUser);
    console.log("Logged in User on Login Detected, Routing to Inventory");
    return redirect('/profile')
  }
}