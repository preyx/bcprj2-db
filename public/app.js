// //Global variable to store userID, null if no one is signed in


let userId = null
let enemyDisplay = document.getElementById('enemyDisplay')

//function to create an account
const createAccount = username => {
  axios.post('/api/users', {username: username})
  .then( () => {
    console.log('ping')
    signIn(username)
  })
  //error checking for when a username already exists
  .catch(error => {
    console.error(error);
    document.getElementById('error').textContent = 'Username has been taken. Please enter a new Username'
  })
}

//get user inputted pokemon info
const getPokemon = pokeName => {
  console.log(`/api/pokemons/${pokeName}`)
  // axios.get(`/api/pokemons/${pokeName}`)
  // .then( ({data: pokeInfo}) =>{
  //   let pokeCard = document.createElement('div')
  //   pokeCard.classList.add('col-12', 'col-md-4', 'card', 'cardStyle')
  //   pokeCard.setAttribute('id', `${pokeInfo[0].id}`)
  //   pokeCard.innerHTML = `
  //   <img class="card-img-top pokeImages" src="${pokeInfo[0].sprite}" alt="${pokeInfo[0].name}">
  //   <div class="card-body">
  //     <h5 class="card-title cardTitleStyle">${pokeInfo[0].name}</h5>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">Stat Total: ${pokeInfo[0].base_total} </li>
  //     <li class="list-group-item">Attack: ${pokeInfo[0].attack}</li>
  //     <li class="list-group-item">Defense: ${pokeInfo[0].defense}</li>
  //     <li class="list-group-item">Special Attack: ${pokeInfo[0].sp_attack}</li>
  //     <li class="list-group-item">Special Defense: ${pokeInfo[0].sp_defense}</li>
  //     <li class="list-group-item">Special Speed: ${pokeInfo[0].speed}</li>
  //   </ul>
  //   `
  //   enemyDisplay.append(pokeCard)
  // })
  // .catch(error => {
  //   console.error(error)
  //   document.getElementById('searchError').textContent = 'Pokemon does not exist. Please enter another pokemon'
  // })
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
  if(target.nodeName ==='BUTTON') {
    event.preventDefault()
    //empty out all error messages
    document.getElementById('error').innerHTML = ''
    document.getElementById('searchError').innerHTML = ''
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
        console.log(`userId: ${userId}`)
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
  }
})

//event listener for search button
// document.getElementById('search').addEventListener('click', event => {
//   event.preventDefault()
//   if (document.getElementById('pokemonSearch').value === ''){
//     document.getElementById('searchError').textContent = "Error. Please enter a Pokemon."
//   }else{
//     getPokemon(document.getElementById('pokemonSearch').value)
//   }
// })

//function to display pokemon stats when user hovers over name
  $(function () {
    $('[data-toggle="popover"]').popover({
      placement: 'bottom',
      trigger: 'hover'
    })
  })