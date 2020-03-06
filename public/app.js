//Global variable to store userID, null if no one is signed in
let userId = null


//function to create an account
const createAccount = username => {
  axios.post('/api/users', {username: username})
  .then( () => {
    console.log('ping')
    signIn(username)
  })
  //error checking for when a username already exists
  .catch(error => {
    console.log(error);
    document.getElementById('error').textContent = "Username has been taken. Please enter a new Username"
  })
}

//function to sign in user
const signIn = username => {
  axios.get(`/api/users/${username}`)
    .then(({ data: user }) => {
      //set global userId to the signed in user
      userId = user.id
      document.getElementById('welcome').textContent = `Welcome ${username}!`
      //empty out user input
      document.getElementById('username').value = ''
      console.log(`UserId: ${userId}`)
    })
    .catch(error => console.error(error))
}
document.addEventListener('click', event => {
  let target = event.target
  console.log(event.target.nodeName)
  if(target.nodeName ==='BUTTON') {
    event.preventDefault()
    //empty out all error messages
    document.getElementById('error').innerHTML = ''
    if(target.id ==='signIn'){
      //check if there is nothing in the input field
      if (document.getElementById('username').value === '') {
        document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
      } else {
        signIn(document.getElementById('username').value)
      }
    }
    else if(target.id ==='signOut'){
      //if a user tries to signout when not signed in
      if(userId === null){
        document.getElementById('error').textContent = 'Error. Not signed in.'
      }else{
        userId = null
        //empty out welcome message
        document.getElementById('welcome').innerHTML = ''
      }
    }
    else if(target.id==='create'){
      //check if there is nothing in the input field
      if(document.getElementById('username').value ===''){
        document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
      }else{
        createAccount(document.getElementById('username').value)
      }
    } 
    else if(target.id ==='search'){
      if(document.getElementById('pokemonSearch').value = ''){
        // Error if there is nothing inputted
      }else{
        console.log(pokedex.pokemon(document.getElementById('pokemonSearch').value))
      }
    }
  }
})