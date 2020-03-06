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
          <small id="pokeHelp" className="form-text text-muted">Our database has over 700 Pokemon</small>
        </div>
        <button type="submit" className="btn btn-primary" id = "search">Search</button>
      </form>
      <br></br>
    </div>
    <div className="row">
          <p className="errorMessage col-12" id="searchError"></p>
    </div>
    <div className="row" id="row">
      {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
      <div className="col col-sm-6" id="col">
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
      </div>
    </div>
    <button className="btn btn-outline-success btn-warning" type="button">Generate Team</button>
    <input type="checkbox" id="legendary" name="legendary" value="pokemon"/>
    <label forhtml="legendary">No Legendaries</label><br/>

    <div className="row" id="row">
      <div className="col col-sm-6" id="col">
        <h2>Results</h2>
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
        <button className="btn btn-outline-success btn-warning"  type="button">Remove Team</button>
        <button className="btn btn-outline-success btn-warning"  type="button">Generate Random
          Name</button>
        <h2>Random Name Generator Results</h2>

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
    </div>
  </div>

  </Html>
  )
}
module.exports = Home