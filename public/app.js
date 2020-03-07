// //Global variable to store userID, null if no one is signed in


let userId = null
let counter = 0
let enemyId = 1
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
  document.getElementById('searchError').innerHTML = ''
  axios.get(`/api/pokemons/${pokeName}`)
  .then( ({data: pokeInfo}) =>{
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
      // enemyDisplay.append(pokeCard)
      enemyId += 1
      console.log(`ping, EnemyID: ${enemyId}`)
      popover()
    }else{
      let pokeCard = document.createElement('div')
      pokeCard.classList.add('pokeCard', 'text-center')
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
      console.log(user)
      //set global userId to the signed in user
      userId = user.id
      document.getElementById('welcome').textContent = `Welcome ${username}!`
      //empty out user input
      document.getElementById('username').value = ''
      console.log(`UserId: ${userId}`)
    })
    .catch(error => {
      console.error(error);
      document.getElementById('error').textContent = 'Username does not Exist.'
    })
}
document.addEventListener('click', event => {
  let target = event.target
  if(target.nodeName ==='BUTTON') {
    event.preventDefault()
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
        //empty out display
        enemyDisplay.innerHTML = ''
      }
    }
    else if(target.id==='create'){
      //check if there is nothing in the input field
      if(document.getElementById('username').value ===''){
        document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
      }else{
        createAccount(document.getElementById('username').value)
      }
    } else if(target.id==='generate'){
      let team = { one: document.getElementById('enemy1').innerText, two: document.getElementById('enemy2').innerText, three: document.getElementById('enemy3').innerText }
      let result = {}
      const prefix = '/pokemons/matchups/' + (document.getElementById('legendary').checked) ? 'nl/' : null
      axios.get(prefix + team.one)
      .then ( result1 => {
        axios.get(prefix + team.two)
        .then ( result2 => {
          axios.get(prefix + team.three)
          .then ( result3 => {
            for (let i = 0; i < 3; i++) {
              // *** create row with <div className="d-flex">
              if (i < result1.length) {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                pokeCard.setAttribute('id', `col1`)
                if (result1[i].type2 === '') {
                  result1[i].type2 = 'N/A'
                }
                pokeCard.innerHTML = `
        <img src="${result1[i].sprite}" className="${result1[i].name}" alt="..." />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${result1[i].type1}<br />
        Type2: ${result1[i].type2}<br />
        HP: ${result1[i].hp}<br />
        Atk: ${result1[i].attack}<br />
        Def: ${result1[i].defense}<br />
        SpA: ${result1[i].sp_attack}<br />
        SpD: ${result1[i].sp_defense}<br />
        Speed: ${result1[i].speed}<br />
        '>${result1[i].name}</p>
      `
                ***.append(pokeCard)
              } else {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                ***.append(pokeCard)
              }
              if (i < result2.length) {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                pokeCard.setAttribute('id', `col2`)
                if (result2[i].type2 === '') {
                  result2[i].type2 = 'N/A'
                }
                pokeCard.innerHTML = `
        <img src="${result2[i].sprite}" className="${result2[i].name}" alt="..." />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${result2[i].type1}<br />
        Type2: ${result2[i].type2}<br />
        HP: ${result2[i].hp}<br />
        Atk: ${result2[i].attack}<br />
        Def: ${result2[i].defense}<br />
        SpA: ${result2[i].sp_attack}<br />
        SpD: ${result2[i].sp_defense}<br />
        Speed: ${result2[i].speed}<br />
        '>${result2[i].name}</p>
      `
                ***row.append(pokeCard)

              } else {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                ***row.append(pokeCard)

              }
              if (i < result2.length) {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                pokeCard.setAttribute('id', `col3`)
                if (pokeInfo.type2 === '') {
                  pokeInfo.type2 = 'N/A'
                }
                pokeCard.innerHTML = `
        <img src="${result3[i].sprite}" className="${result3[i].name}" alt="..." />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${result3[i].type1}<br />
        Type2: ${result3[i].type2}<br />
        HP: ${result3[i].hp}<br />
        Atk: ${result3[i].attack}<br />
        Def: ${result3[i].defense}<br />
        SpA: ${result3[i].sp_attack}<br />
        SpD: ${result3[i].sp_defense}<br />
        Speed: ${result3[i].speed}<br />
        '>${result3[i].name}</p>
      `
                ***.append(pokeCard)

              } else {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                ***.append(pokeCard)

              }
            }
          })
            .catch(error => {
              console.error(error)
            })
        })
          .catch(error => {
            console.error(error)
          })

      })
        .catch(error => {
          console.error(error)
        })
// end row with </div>
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