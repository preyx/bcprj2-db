// //Global variable to store userID, null if no one is signed in
let userId = null
let currentUsername = ''
let counter = 0
let enemyId = 1
//global variables to check if user has selected a pokemon for their team (one for each row)
let pokemon1Select = 0
let pokemon2Select = 0
let pokemon3Select = 0
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

//get random pokemon
document.getElementById('random').addEventListener('click', event => {
  event.preventDefault()
  let randomNum = Math.floor(Math.random() * 721) + 1
  axios.get(`/api/pokemons/id/${randomNum}`)
    .then(({ data }) => {
      document.getElementById('pokemonSearch').value = data.name
    })
})
//get user inputted pokemon info
const getPokemon = pokeName => {
  document.getElementById('searchError').innerHTML = ''
  axios.get(`/api/pokemons/${pokeName}`)
  .then( ({data: pokeInfo}) =>{
    console.log(pokeInfo)
    if(enemyId > 3 ){
      counter+=1
      if(counter>3){
        counter=1
      }
      document.getElementById(`enemy${counter}`).dataset.pokemonId = pokeInfo.pokedex_number
      document.getElementById(`enemy${counter}`).innerHTML =`
      <img src="${pokeInfo.sprite}" alt="${pokeInfo.name}" />
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
      popover()
    }else{
      let pokeCard = document.createElement('div')
      pokeCard.classList.add('pokeCard', 'text-center')
      pokeCard.dataset.pokemonId = pokeInfo.pokedex_number
      pokeCard.setAttribute('id', `enemy${enemyId}`)
      if(pokeInfo.type2 === ''){
        pokeInfo.type2 = 'N/A'
      }
      pokeCard.innerHTML = `
        <img src="${pokeInfo.sprite}" alt="${pokeInfo.name}" />
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
const renderUserSavedTeams = user => {
  const target = document.getElementById('teamArray')
  //if user has no saved teams
  if(user.teams.length <= 0 ){
    target.innerHTML = `<p class = "titleStyle">No Saved Teams to Display<p>`
  }
  else{
    target.innerHTML = ''
    for (let i = 0; i < user.teams.length; i++) {
      // console.log(user.teams[i]['pokemon1'].name)
      let teamRow = document.createElement('div')
      teamRow.dataset.id= user.teams[i].id
      // teamRow.dataset.teamId = user.teams.id
      teamRow.classList.add('d-flex', 'p-2')
      for (let j = 0; j < 3; j++) {
        let member = `enemy${j + 1}`
        // axios.get(`/api/pokemons/${member.toLowerCase()}`)
        // .then(({ data: pokeInfo}) => {
        // pokemon.dataset.pokemonId = matchups[i].pokedex_number
        // pokemon.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
        teamRow.innerHTML += `<div class="team text-center"><img src="${user.teams[i][member].sprite}" alt="${user.teams[i][member].name}" /></div>`
        // })
        //   .catch(error => {
        //     console.error(error)
        //   })
      }
      teamRow.innerHTML += '<div class="team text-center"><p>VS</p></div>'
      for (let j = 0; j < 3; j++) {
        let member = `pokemon${j + 1}`
        // axios.get(`/api/pokemons/${member.toLowerCase()}`)
        // .then(({ data: pokeInfo}) => {
        // pokemon.dataset.pokemonId = matchups[i].pokedex_number
        // pokemon.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
        teamRow.innerHTML += `<div class="team text-center"><img src="${user.teams[i][member].sprite}" alt="${user.teams[i][member].name}" /></div>`
        // })
        //   .catch(error => {
        //     console.error(error)
        //   })
      }
      teamRow.innerHTML += `<button class="delete">X</button>`
      target.append(teamRow)
    }
  }
}

//function to sign in user
const signIn = username => {
  //clear out all error messages when user signs in
  document.getElementById('searchError').innerHTML = ''
  document.getElementById('error').innerHTML = ''

  //update Team message
  document.getElementById('myTeamText').textContent = 'Select a Pokemon from each column in Matchups to add to your team.'
  axios.get(`/api/users/${username}`)
    .then(({ data: user }) => {
      console.log(user)
      //set global userId to the signed in user
      userId = user.id
      document.getElementById('welcome').textContent = `Welcome ${username}!`
      //empty out user input
      currentUsername = document.getElementById('username').value
      document.getElementById('username').value = ''
      console.log(`UserId: ${userId}`)
      renderUserSavedTeams(user)
    })
    .catch(error => {
      console.error(error);
      document.getElementById('error').textContent = 'Username does not Exist.'
    })
}

//generating pokemon matchups
const generateMatchups = () => {
  document.getElementById('matchupsText').innerHTML = ''
  document.getElementById('result0').innerHTML =''
  document.getElementById('result1').innerHTML =''
  document.getElementById('result2').innerHTML =''
  document.getElementById('result3').innerHTML =''
  document.getElementById('result4').innerHTML =''
  let team = { one: document.getElementById('enemy1').innerText, two: document.getElementById('enemy2').innerText, three: document.getElementById('enemy3').innerText }
  let result = {}
  let prefix = document.getElementById('legendary').checked ? ('/api/pokemons/matchups/nl/') : '/api/pokemons/matchups/'
  axios.get(prefix + team.one)
  .then( ({data: matchups}) => {
    for(let i = 0; i<5; i++ ){
      if(i === 0){
        let matchupName = document.createElement('div')
        matchupName.classList.add('pokeCard', 'text-center')
        matchupName.innerHTML = `${team.one} Matchups <hr>` 
        document.getElementById('matchupName').append(matchupName)
      }
      if(i<matchups.length){
        let targetRow = document.getElementById(`result${i}`)
        let pokeCard = document.createElement('div')
        pokeCard.classList.add('pokeCard', 'text-center')
        //putting info in the dataset
        pokeCard.dataset.pokemonId = matchups[i].pokedex_number
        pokeCard.dataset.type1 = matchups[i].type1
        pokeCard.dataset.type2 = matchups[i].type2
        pokeCard.dataset.hp = matchups[i].hp
        pokeCard.dataset.attack = matchups[i].attack
        pokeCard.dataset.defense = matchups[i].defense
        pokeCard.dataset.sp_attack = matchups[i].sp_attack
        pokeCard.dataset.sp_defense = matchups[i].sp_defense
        pokeCard.dataset.speed = matchups[i].speed
        pokeCard.dataset.sprite = matchups[i].sprite
        pokeCard.dataset.name = matchups[i].name
        pokeCard.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
        if (matchups[i].type2 === '') {
          matchups[i].type2 = 'N/A'
        }
        pokeCard.innerHTML = `
          <img class = "select" src="${matchups[i].sprite}" alt="${matchups[i].name}" />
          <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
          Type1: ${matchups[i].type1}<br />
          Type2: ${matchups[i].type2}<br />
          HP: ${matchups[i].hp}<br />
          Atk: ${matchups[i].attack}<br />
          Def: ${matchups[i].defense}<br />
          SpA: ${matchups[i].sp_attack}<br />
          SpD: ${matchups[i].sp_defense}<br />
          Speed: ${matchups[i].speed}<br />
          '>${matchups[i].name}</p>
        `
        targetRow.append(pokeCard)
      }else{
        //generating a missingno card if not enough matchups are returned
        let targetRow = document.getElementById(`result${i}`)
        let pokeCard = document.createElement('div')
        pokeCard.classList.add('pokeCard', 'text-center')
        pokeCard.innerHTML = `
        <img src = "./assets/missingno.png" alt = "missingno"/>
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ?̶̇̀?̴̥̉?̵̭̽ <br />
        Type2: ?̵͔̆?̷͘͝?̵̎̍ <br />
        HP: ?̸͔̇?̶̄̀?̴͎̕ <br />
        Atk: ?̶̊̑?̶̅̊?̶̾͠ <br />
        Def: ?̶̈́́?̵̼̀?̵̘̾ <br />
        SpA:?̷̑̍?̴̭̈?̶̡͂ <br />
        SpD: ?̶̰̔?̵̛̗?̶̖̅ <br />
        Speed: ?̸̘̓?̷̤͠?̸̛̀ <br />
        '>missingno</p>
        `
        targetRow.append(pokeCard)
      }
    }
    axios.get(prefix + team.two)
    .then(({data: matchups}) => {
      for (let i = 0; i < 5; i++) {
        if (i === 0) {
          let matchupName = document.createElement('div')
          matchupName.classList.add('pokeCard', 'text-center')
          matchupName.innerHTML = `${team.two} Matchups <hr>`
          document.getElementById('matchupName').append(matchupName)
        }
        if (i < matchups.length) {
          let targetRow = document.getElementById(`result${i}`)
          let pokeCard = document.createElement('div')
          pokeCard.classList.add('pokeCard', 'text-center')
          //putting info in the dataset
          pokeCard.dataset.pokemonId = matchups[i].pokedex_number
          pokeCard.dataset.type1 = matchups[i].type1
          pokeCard.dataset.type2 = matchups[i].type2
          pokeCard.dataset.hp = matchups[i].hp
          pokeCard.dataset.attack = matchups[i].attack
          pokeCard.dataset.defense = matchups[i].defense
          pokeCard.dataset.sp_attack = matchups[i].sp_attack
          pokeCard.dataset.sp_defense = matchups[i].sp_defense
          pokeCard.dataset.speed = matchups[i].speed
          pokeCard.dataset.sprite = matchups[i].sprite
          pokeCard.dataset.name = matchups[i].name
          pokeCard.setAttribute('id', `matchupTwo_${matchups[i].pokedex_number}`)
          if (matchups[i].type2 === '') {
            matchups[i].type2 = 'N/A'
          }
          pokeCard.innerHTML = `
          <img class = "select" src="${matchups[i].sprite}" alt="${matchups[i].name}" />
          <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
          Type1: ${matchups[i].type1}<br />
          Type2: ${matchups[i].type2}<br />
          HP: ${matchups[i].hp}<br />
          Atk: ${matchups[i].attack}<br />
          Def: ${matchups[i].defense}<br />
          SpA: ${matchups[i].sp_attack}<br />
          SpD: ${matchups[i].sp_defense}<br />
          Speed: ${matchups[i].speed}<br />
          '>${matchups[i].name}</p>
        `
          targetRow.append(pokeCard)
        } else {
          //generating a missingno card if not enough matchups are returned
          let targetRow = document.getElementById(`result${i}`)
          let pokeCard = document.createElement('div')
          pokeCard.classList.add('pokeCard', 'text-center')
          pokeCard.innerHTML = `
        <img src = "./assets/missingno.png" alt = "missingno"/>
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ?̶̇̀?̴̥̉?̵̭̽ <br />
        Type2: ?̵͔̆?̷͘͝?̵̎̍ <br />
        HP: ?̸͔̇?̶̄̀?̴͎̕ <br />
        Atk: ?̶̊̑?̶̅̊?̶̾͠ <br />
        Def: ?̶̈́́?̵̼̀?̵̘̾ <br />
        SpA:?̷̑̍?̴̭̈?̶̡͂ <br />
        SpD: ?̶̰̔?̵̛̗?̶̖̅ <br />
        Speed: ?̸̘̓?̷̤͠?̸̛̀ <br />
        '>missingno</p>
        `
          targetRow.append(pokeCard)
        }
      }
      axios.get(prefix + team.three)
      .then(({data: matchups}) => {
        for (let i = 0; i < 5; i++) {
          if (i === 0) {
            let matchupName = document.createElement('div')
            matchupName.classList.add('pokeCard', 'text-center')
            matchupName.innerHTML = `${team.three} Matchups <hr>`
            document.getElementById('matchupName').append(matchupName)
          }
          if (i < matchups.length) {
            let targetRow = document.getElementById(`result${i}`)
            let pokeCard = document.createElement('div')
            pokeCard.classList.add('pokeCard', 'text-center')
            //putting info in the dataset
            pokeCard.dataset.pokemonId = matchups[i].pokedex_number
            pokeCard.dataset.type1 = matchups[i].type1
            pokeCard.dataset.type2 = matchups[i].type2
            pokeCard.dataset.hp = matchups[i].hp
            pokeCard.dataset.attack = matchups[i].attack
            pokeCard.dataset.defense = matchups[i].defense
            pokeCard.dataset.sp_attack = matchups[i].sp_attack
            pokeCard.dataset.sp_defense = matchups[i].sp_defense
            pokeCard.dataset.speed = matchups[i].speed
            pokeCard.dataset.sprite = matchups[i].sprite
            pokeCard.dataset.name = matchups[i].name
            pokeCard.setAttribute('id', `matchupThree_${matchups[i].pokedex_number}`)
            if (matchups[i].type2 === '') {
              matchups[i].type2 = 'N/A'
            }
            pokeCard.innerHTML = `
          <img class = "select" src="${matchups[i].sprite}" alt="${matchups[i].name}" />
          <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
          Type1: ${matchups[i].type1}<br />
          Type2: ${matchups[i].type2}<br />
          HP: ${matchups[i].hp}<br />
          Atk: ${matchups[i].attack}<br />
          Def: ${matchups[i].defense}<br />
          SpA: ${matchups[i].sp_attack}<br />
          SpD: ${matchups[i].sp_defense}<br />
          Speed: ${matchups[i].speed}<br />
          '>${matchups[i].name}</p>
        `
            targetRow.append(pokeCard)
          } else {
            //generating a missingno card if not enough matchups are returned
            let targetRow = document.getElementById(`result${i}`)
            let pokeCard = document.createElement('div')
            pokeCard.classList.add('pokeCard', 'text-center')
            pokeCard.innerHTML = `
              <img src = "./assets/missingno.png" alt = "missingno"/>
              <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
              Type1: ?̶̇̀?̴̥̉?̵̭̽ <br />
              Type2: ?̵͔̆?̷͘͝?̵̎̍ <br />
              HP: ?̸͔̇?̶̄̀?̴͎̕ <br />
              Atk: ?̶̊̑?̶̅̊?̶̾͠ <br />
              Def: ?̶̈́́?̵̼̀?̵̘̾ <br />
              SpA:?̷̑̍?̴̭̈?̶̡͂ <br />
              SpD: ?̶̰̔?̵̛̗?̶̖̅ <br />
              Speed: ?̸̘̓?̷̤͠?̸̛̀ <br />
              '>missingno</p>
              `
            targetRow.append(pokeCard)
          }
        }
        popover()
        })
      .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
  })
  .catch(error => console.error(error))
}

const addToTeam = pokemon => {
  console.log(pokemon.dataset.pokemonId)
  let divId = (pokemon.id).split('_')
  let targetDiv
  switch(divId[0]){
    case 'matchupOne' :
      //subtract 1 in the beginning in the event user is picking another pokemon in the same column. Only if value is greater than 0
      if(pokemon1Select > 0){
        pokemon1Select -=1
      }
      targetDiv = document.getElementById('myTeam1')
      targetDiv.dataset.pokemonId = pokemon.dataset.pokemonId
      targetDiv.innerHTML = `
        <img class = "select" src="${pokemon.dataset.sprite}" alt="${pokemon.dataset.name}" />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${pokemon.dataset.type1}<br />
        Type2: ${pokemon.dataset.type2}<br />
        HP: ${pokemon.dataset.hp}<br />
        Atk: ${pokemon.dataset.attack}<br />
        Def: ${pokemon.dataset.defense}<br />
        SpA: ${pokemon.dataset.sp_attack}<br />
        SpD: ${pokemon.dataset.sp_defense}<br />
        Speed: ${pokemon.dataset.speed}<br />
        '>${pokemon.dataset.name}</p>
      `
      pokemon1Select +=1
      break
    case 'matchupTwo':
      if (pokemon2Select > 0) {
        pokemon2Select -= 1
      }
      targetDiv = document.getElementById('myTeam2')
      targetDiv.dataset.pokemonId = pokemon.dataset.pokemonId
      targetDiv.innerHTML = `
        <img class = "select" src="${pokemon.dataset.sprite}" alt="${pokemon.dataset.name}" />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${pokemon.dataset.type1}<br />
        Type2: ${pokemon.dataset.type2}<br />
        HP: ${pokemon.dataset.hp}<br />
        Atk: ${pokemon.dataset.attack}<br />
        Def: ${pokemon.dataset.defense}<br />
        SpA: ${pokemon.dataset.sp_attack}<br />
        SpD: ${pokemon.dataset.sp_defense}<br />
        Speed: ${pokemon.dataset.speed}<br />
        '>${pokemon.dataset.name}</p>
      `
      pokemon2Select +=1
      break
    case 'matchupThree':
      if (pokemon3Select > 0) {
        pokemon3Select -= 1
      }
      targetDiv = document.getElementById('myTeam3')
      targetDiv.dataset.pokemonId = pokemon.dataset.pokemonId
      targetDiv.innerHTML = `
        <img class = "select" src="${pokemon.dataset.sprite}" alt="${pokemon.dataset.name}" />
        <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
        Type1: ${pokemon.dataset.type1}<br />
        Type2: ${pokemon.dataset.type2}<br />
        HP: ${pokemon.dataset.hp}<br />
        Atk: ${pokemon.dataset.attack}<br />
        Def: ${pokemon.dataset.defense}<br />
        SpA: ${pokemon.dataset.sp_attack}<br />
        SpD: ${pokemon.dataset.sp_defense}<br />
        Speed: ${pokemon.dataset.speed}<br />
        '>${pokemon.dataset.name}</p>
      `
      pokemon3Select +=1
      break
  }
  popover()
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
        //reset variables
        userId = null
        currentUsername = ''
        counter = 0
        enemyId = 1
        teamCounter = 0
        //empty out welcome message
        console.log(`userId: ${userId}`)
        document.getElementById('welcome').innerHTML = ''
        //empty out displays
          document.getElementById('enemyDisplay').innerHTML = ''
          document.getElementById('myTeam1').innerHTML = ''
          document.getElementById('myTeam2').innerHTML = ''
          document.getElementById('myTeam3').innerHTML = ''
          document.getElementById('result0').innerHTML = ''
          document.getElementById('result1').innerHTML = ''
          document.getElementById('result2').innerHTML = ''
          document.getElementById('result3').innerHTML = ''
          document.getElementById('result4').innerHTML = ''
          document.getElementById('matchupName').innerHTML=''
          //display alt text when signed out
          document.getElementById('teamArray').innerHTML = '<p class = "titleStyle">Please Sign in To View Saved Teams</p> '
          document.getElementById('matchupsText').textContent = 'Select 3 enemy Pokemon to generate matchups.'
          document.getElementById('myTeamText').textContent = 'Please login to create a team.'
      }
    }
    else if (target.id === 'generate') {
      generateMatchups()
    }
    else if(target.id==='create'){
      //check if there is nothing in the input field
      if(document.getElementById('username').value ===''){
        document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
      }
      else{
        createAccount(document.getElementById('username').value)
      }
    }
    else if (target.id === 'save'){
      axios.post(`/api/teams`, {
        userId: userId,
        pokemon1Id: document.getElementById('myTeam1').dataset.pokemonId,
        pokemon2Id: document.getElementById('myTeam2').dataset.pokemonId,
        pokemon3Id: document.getElementById('myTeam3').dataset.pokemonId,
        enemy1Id: document.getElementById('enemy1').dataset.pokemonId,
        enemy2Id: document.getElementById('enemy2').dataset.pokemonId,
        enemy3Id: document.getElementById('enemy3').dataset.pokemonId
      })
        .then(() => {
          console.log('Team successfully saved!')
          //empty out displays
          document.getElementById('enemyDisplay').innerHTML = ''
          document.getElementById('myTeam1').innerHTML = ''
          document.getElementById('myTeam2').innerHTML = ''
          document.getElementById('myTeam3').innerHTML = ''
          document.getElementById('result0').innerHTML = ''
          document.getElementById('result1').innerHTML = ''
          document.getElementById('result2').innerHTML = ''
          document.getElementById('result3').innerHTML = ''
          document.getElementById('result4').innerHTML = ''
          document.getElementById('matchupName').innerHTML = ''
          //display alternative text when a team is saved
          document.getElementById('matchupsText').textContent = 'Select 3 enemy Pokemon to generate matchups.'
          document.getElementById('myTeamText').textContent = 'Select a Pokemon from each column in Matchups to add to your team.'
          //reset counters
          enemyId = 1
          teamCounter = 0
          pokemon1Select = 0
          pokemon2Select = 0
          pokemon3Select = 0
          //uncheck legendary box
          document.getElementById('legendary').checked = false
          axios.get(`/api/users/${currentUsername}`)
          .then(({ data: user }) => renderUserSavedTeams(user))
          .catch(error => console.error(error))
        })
        .catch(e => console.error(e))
    } 
    //checks if delete button was clicked
    else if(target.classList.contains('delete')){
      console.log(target.parentNode.dataset.id)
      axios.delete(`/api/teams/${target.parentNode.dataset.id}`)
      .then(() => {
        console.log('Team has been deleted')
        axios.get(`/api/users/${currentUsername}`)
        .then( ({data: user}) => {
          renderUserSavedTeams(user)
        })
        .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
    }
  }
  // listerner when user clicks on img of pokemon they want to add to their team
  else if(target.nodeName ==='IMG' && target.classList.contains('select')){
    addToTeam(target.parentElement)
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

//initalizes all popover elements at start
popover()

//set interval to enable generate team button
setInterval(() => {
  if(enemyId > 3){
    document.getElementById('generate').classList.remove('disabled')
  }else{
    //checks if it doesnt have the class
    if(!document.getElementById('generate').classList.contains('disabled')){
      //only add disabled class if class does not exist
      document.getElementById('generate').classList.add('disabled')
    }
  }
  //a user has 3 selected pokemon on their team
  if((pokemon1Select + pokemon2Select + pokemon3Select)>=3){
    document.getElementById('save').classList.remove('disabled')
  } else {
    //checks if it doesnt have the class
    if (!document.getElementById('save').classList.contains('disabled')) {
      //only add disabled class if class does not exist
      document.getElementById('save').classList.add('disabled')
    }
  }
}, 1000);