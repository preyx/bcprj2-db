//Global variable to store userID
let userId

const createAccount = username => {
  axios.post('/api/users', {username: username})
  .then(() => {
    signIn(username)
  })

  //NEED TO FIX ERROR IF A USERNAME HAS BEEN TAKEN
  .catch(error => {
    document.getElementById('error').textContent = "Username has been taken. Please enter a new Username"
    console.log(error)
  })
}

const signIn = username => {
  axios.get(`/api/users/${username}`)
    .then(({ data: user }) => {
      //set global userId to the signed in user
      userId = user.id
      document.getElementById('welcome').textContent = `Welcome ${username}!`
      //empty out user input
      document.getElementById('username').value = ''
    })
    .catch(error => console.error(error))
}
document.addEventListener('click', event => {
  let target = event.target
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

    }
    else if(target.id==='create'){
      //check if there is nothing in the input field
      if(document.getElementById('username').value ===''){
        document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
      }else{
        createAccount(document.getElementById('username').value)
      }
    }
  }
})