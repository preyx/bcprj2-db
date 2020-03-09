// //Global variable to store userID, null if no one is signed in
let userId = null
let counter = 0
let enemyId = 1
let enemyDisplay = document.getElementById('enemyDisplay')

//function to create an account
const createAccount = username => {
    axios.post('/api/users', { username: username })
        .then(() => {
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
        .then(({ data: pokeInfo }) => {
            console.log(pokeInfo)
            if (enemyId > 3) {
                counter += 1
                if (counter > 3) {
                    counter = 1
                }
                document.getElementById(`enemy${counter}`).dataset.pokemonId = pokeInfo.pokedex_number
                document.getElementById(`enemy${counter}`).innerHTML = `
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
                popover()
            } else {
                let pokeCard = document.createElement('div')
                pokeCard.classList.add('pokeCard', 'text-center')
                pokeCard.dataset.pokemonId = pokeInfo.pokedex_number
                pokeCard.setAttribute('id', `enemy${enemyId}`)
                if (pokeInfo.type2 === '') {
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
                enemyId += 1
                counter += 1
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

//generating pokemon matchups
const generateMatchups = () => {
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
      if(i<matchups.length){
        let targetRow = document.getElementById(`result${i}`)
        let pokeCard = document.createElement('div')
        pokeCard.classList.add('pokeCard', 'text-center')
        pokeCard.dataset.pokemonId = matchups[i].pokedex_number
        pokeCard.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
        if (matchups[i].type2 === '') {
          matchups[i].type2 = 'N/A'
        }
        pokeCard.innerHTML = `
          <img src="${matchups[i].sprite}" alt="${matchups[i].name}" />
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
        if (i < matchups.length) {
          let targetRow = document.getElementById(`result${i}`)
          let pokeCard = document.createElement('div')
          pokeCard.classList.add('pokeCard', 'text-center')
          pokeCard.dataset.pokemonId = matchups[i].pokedex_number
          pokeCard.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
          if (matchups[i].type2 === '') {
            matchups[i].type2 = 'N/A'
          }
          pokeCard.innerHTML = `
          <img src="${matchups[i].sprite}" alt="${matchups[i].name}" />
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
          if (i < matchups.length) {
            let targetRow = document.getElementById(`result${i}`)
            let pokeCard = document.createElement('div')
            pokeCard.classList.add('pokeCard', 'text-center')
            pokeCard.dataset.pokemonId = matchups[i].pokedex_number
            pokeCard.setAttribute('id', `matchupOne_${matchups[i].pokedex_number}`)
            if (matchups[i].type2 === '') {
              matchups[i].type2 = 'N/A'
            }
            pokeCard.innerHTML = `
          <img src="${matchups[i].sprite}" alt="${matchups[i].name}" />
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


document.addEventListener('click', event => {
    let target = event.target
    if (target.nodeName === 'BUTTON') {
        event.preventDefault()
        if (target.id === 'signIn') {
            //check if there is nothing in the input field
            if (document.getElementById('username').value === '') {
                document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
            } else {
                signIn(document.getElementById('username').value)
            }
        }
        else if (target.id === 'signOut') {
            //if a user tries to signout when not signed in
            if (userId === null) {
                document.getElementById('error').textContent = 'Error. Not signed in.'
            } else {
                userId = null
                //empty out welcome message
                console.log(`userId: ${userId}`)
                document.getElementById('welcome').innerHTML = ''
                //empty out display
                enemyDisplay.innerHTML = ''
            }
        }
        else if (target.id === 'generate') {
            generateMatchups()
        }
        else if (target.id === 'create') {
            //check if there is nothing in the input field
            if (document.getElementById('username').value === '') {
                document.getElementById('error').textContent = 'Invalid input. Please enter a Username'
            }
            else {
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
    if (userId === null) {
        console.log('null')
        document.getElementById('searchError').textContent = "Please sign in first before making a search."
    }
    else if (document.getElementById('pokemonSearch').value === '') {
        document.getElementById('searchError').textContent = "Error. Please enter a Pokemon."
    }
    else {
        getPokemon(document.getElementById('pokemonSearch').value)
        //empty out user input
        document.getElementById('pokemonSearch').value = ''
    }
})

//function to display pokemon stats when user hovers over name
const popover = () => {
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
    if (enemyId > 3) {
        document.getElementById('generate').classList.remove('disabled')
    } else {
        //checks if it doesnt have the class
        if (!document.getElementById('generate').classList.contains('disabled')) {
            //only add disabled class if class does not exist
            document.getElementById('generate').classList.add('disabled')
        }
    }
}, 1000);
