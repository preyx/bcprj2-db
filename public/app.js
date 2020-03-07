//Global variable to store userID, null if no one is signed in

let userId = null
let counter = 0
let enemyId = 1
let enemyDisplay = document.getElementById('enemyDisplay')

//function to create an account
const createAccount = username => {
  axios.post('/api/users', {username: username})
  .then( () => {
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
  document.getElementById('searchError').innerHTML = ''
  axios.get(`/api/pokemons/${pokeName}`)
  .then( ({data: pokeInfo}) =>{
    console.log(pokeInfo)
    let pokeCard = document.createElement('div')
    pokeCard.classList.add('pokeCard', 'text-center')
    if(enemyId > 3 ){
      counter+=1
      if(counter>3){
        counter=1
      }
      document.getElementById(`enemy${counter}`).innerHTML =`
      <img src="${pokeInfo.sprite}" className="renderImages" alt="${pokeInfo.name}" />
      <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
      Type1: ${pokeInfo.type1}<br />
      Type2: ${pokeInfo.type2}<br />
      HP: ${pokeInfo.hp}<br />
      Atk: ${pokeInfo.attack}<br />
      Def: ${pokeInfo.defense}<br />
      SpA: ${pokeInfo.sp_attack}<br />
      SpD: ${pokeInfo.sp_defense}<br />
      Speed: ${pokeInfo.speed}<br />
      '>${pokeInfo.name}</p>
      `
      enemyDisplay.append(pokeCard)
      enemyId += 1
      console.log(`ping, EnemyID: ${enemyId}`)
      popover()
    }else{
      pokeCard.setAttribute('id', `enemy${enemyId}`)
      if(pokeInfo.type2 === ''){
        pokeInfo.type2 = 'N/A'
      }
      pokeCard.innerHTML = `
        <img src="${pokeInfo.sprite}" className="${pokeInfo.name}" alt="..." />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${pokeInfo.type1}<br />
        Type2: ${pokeInfo.type2}<br />
        HP: ${pokeInfo.hp}<br />
        Atk: ${pokeInfo.attack}<br />
        Def: ${pokeInfo.defense}<br />
        SpA: ${pokeInfo.sp_attack}<br />
        SpD: ${pokeInfo.sp_defense}<br />
        Speed: ${pokeInfo.speed}<br />
        '>${pokeInfo.name}</p>
      `
      enemyDisplay.append(pokeCard)
      enemyId +=1
      counter+=1
      //reinitialize popover element
      popover()

    }
  })
  .catch(error => {
    console.error(error)
    document.getElementById('searchError').textContent = 'Pokemon does not exist. Please enter another pokemon'
  })
}

//function to sign in user
const signIn = username => {
  //clear out all error messages when user signs in
  document.getElementById('searchError').innerHTML = ''
  document.getElementById('error').innerHTML = ''
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
document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('searchError').innerHTML = ''
  //checks if user is signed in
  if(userId === null){
    console.log('null')
    document.getElementById('searchError').textContent = "Please sign in first before making a search."
  }
  else if (document.getElementById('pokemonSearch').value === ''){
    document.getElementById('searchError').textContent = "Error. Please enter a Pokemon."
  }
  else{
    getPokemon(document.getElementById('pokemonSearch').value)
    //empty out user input
    document.getElementById('pokemonSearch').value = ''
  }
})

//get random pokemon
document.getElementById('random').addEventListener('click', event => {
  event.preventDefault()
  let randomNum = Math.floor(Math.random() * 721) + 1
  axios.get(`/api/pokemons/id/${randomNum}`)
  .then( ({data}) => {
    document.getElementById('pokemonSearch').value = data.name
  })
})

//function to display pokemon stats when user hovers over name
const popover = () =>{
  $(function () {
    $('[data-toggle="popover"]').popover({
      placement: 'bottom',
      trigger: 'hover'
    })
  })
}

//initalizes all popover elements
popover()

