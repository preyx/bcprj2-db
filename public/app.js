
//global variable to house userId
let userId

const createAccount = () => {

  axios.post('/api/users', { username: document.getElementById('username').value })
    .then(() => {
      axios.get('')
    })
    .catch()
}
document.addEventListener('click', event => {
  target = event.target
  //checks if the event is a button
  if(target.nodeName ==='BUTTON'){
    event.preventDefault()
    //checks if the create account button is clicked
    if(target.id ==='create***'){
      //if user does not input anything in the username input field
      if(document.getElementById('username***').value ===''){
        //DISPLAY ERROR MESSAGE HERE
      }else{
        createAccount()
      }
    }
    //checks if the sign in button is clicked
    else if(target.id ==='signIn***'){

    }
  }
})