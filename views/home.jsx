const React = require('react')
const Html = require('./layouts/default')

const Home = props =>{
  return(
    <Html>
  {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
  <div className="container">
    <div className="row">
      <h4 id="welcome"></h4>
      <p className = "errorMessage" id = "error"></p>
    </div>
    <div className="row">
      <form className = "col-12">
        <div className="form-group">
          <label forhtml="pokemonSearch">Pokemon</label>
            <input type="text" className="form-control" id="pokemonSearch" aria-describedby="emailHelp"/>
          <small id="pokeHelp" className="form-text text-muted">Select 3 Pokemon to Generate Matchups <span><br></br> HINT: Tap/Hover on the Pokemon's name to see their stats!</span></small>
        </div>
        <div className = "userButtons">
            <button type="submit" className="btn btn-warning btn-outline-danger warningbtn" id = "search">Search</button>
            <button type="submit" className="btn btn-warning btn-outline-danger warningbtn buttonStyle" id = "random">Generate Random Pokemon</button>
        </div>
      </form>
      <br></br>
    </div>
    <div className="row">
          <p className="errorMessage col-12" id="searchError"></p>
    </div>
    <div className="row" id="row">
      {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
      <div className="col col-12 col-md-6" id="col">
        <h1 className = "titleStyle">Enemy Team</h1>
        <hr></hr>
        <div className="d-flex" id = "enemyDisplay">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
              Type1: grass<br />
              Type2: poison<br />
              HP: 45<br />
              Atk: 65<br />
              Def: 49
              '>asdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
              Type1: grass<br />
              Type2: poison<br />
              HP: 45<br />
              Atk: 65<br />
              Def: 49
              '>asdfas</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
              Type1: grass<br />
              Type2: poison<br />
              HP: 45<br />
              Atk: 65<br />
              Def: 49
              '>asdfasdf</p>
          </div> */}
          </div>
    <div className = "userButtons">
      <button id = "generate" className="btn btn-warning btn-outline-danger warningbtn disabled" type="button">Generate Team</button>
      <input className = "checkBoxStyle" type="checkbox" id="legendary" name="legendary" value="pokemon"/>
      <label className="labelStyle" forhtml="legendary">No Legendaries</label><br/>
    </div>
        </div>
        <div className="col col-12 col-md-6" id="col">
          <h1 className = "titleStyle">My Team</h1>
          <hr></hr>
          <div className="d-flex" id = "userDisplay">
            {/* Display User Selected Pokemon Here */}
          </div>
          <div className="userButtons">
            <button id="save" className="btn btn-warning btn-outline-danger warningbtn" type="button">Save Team</button>
          </div>
        </div>
    </div>
    <div className="row" id="row">
      <div className="col col-sm-6" id="col">
        <h2>Results</h2>
        <div className="d-flex" id = "result0">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

        </div>
        <div className="d-flex" id = "result1">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

        </div>
        <div className="d-flex" id = "result2">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

        </div>
        <div className="d-flex" id = "result3">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

        </div>
        <div className="d-flex" id = "result4">
          {/* <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div> */}

        </div>
      </div>




      {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
      <div className="col col-sm-6" id="col">
        <h1>Enemy Team</h1>
        <div className="d-flex">
          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

        </div>
        <h1> Your Team</h1>
        <div className="d-flex">
          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>

          <div className="pokeCard text-center">
            <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" className="" alt="..." />
            <p data-html="true" data-toggle="popover" data-trigger="focus" data-content='
                        Type1: grass<br />
                        Type2: poison<br />
                        HP: 45<br />
                        Atk: 65<br />
                        Def: 49
                        '>asdfasdf</p>
          </div>
        </div>
            <button className="btn btn-warning btn-outline-danger warningbtn"  type="button">Remove Team</button>
      </div>
    </div>
  </div>

  </Html>
  )
}
module.exports = Home