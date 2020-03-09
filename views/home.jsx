const React = require('react')
const Html = require('./layouts/default')

const Home = props => {
  return (
    <Html>
      {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
      <div className='container'>
        <div className='row'>
          <h4 id='welcome' className='welcomeStyle' />
          <p className='errorMessage' id='error' />
        </div>
        <div className='row'>
          <form className='col-12'>
            <div className='form-group'>
              <label forhtml='pokemonSearch'>Pokemon</label>
              <input type='text' className='form-control' id='pokemonSearch' aria-describedby='emailHelp' />
              <small id='pokeHelp' className='form-text text-muted'>Select 3 Pokemon to Generate Matchups <span><br /> HINT: Tap/Hover on the Pokemon's name to see their stats!</span></small>
            </div>
            <div className='userButtons'>
              <button type='submit' className='btn btn-warning btn-outline-danger warningbtn' id='search'>Search</button>
              <button type='submit' className='btn btn-warning btn-outline-danger warningbtn buttonStyle' id='random'>Generate Random Pokemon</button>
            </div>
          </form>
          <br />
        </div>
        <div className='row'>
          <p className='errorMessage col-12' id='searchError' />
        </div>
        <div className='row' id='row'>
          {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
          <div className='col col-12 col-md-6' id='col'>
            <h1 className='titleStyle font'>Enemy Team</h1>
            <hr />
            <div className='d-flex' id='enemyDisplay' />
            <div className='userButtons'>
              <button id='generate' className='btn btn-warning btn-outline-danger warningbtn disabled' type='button'>Generate Team</button>
              <input className='checkBoxStyle' type='checkbox' id='legendary' name='legendary' value='pokemon' />
              <label className='labelStyle' forhtml='legendary'>No Legendaries</label><br />
            </div>
          </div>
          <div className='col col-12 col-md-6' id='col'>
            <h1 className='titleStyle font'>My Team</h1>
            <hr></hr>
            <p id='myTeamText' className='titleStyle'>Please login to create a team.</p>
            <div className='d-flex' id='userDisplay'>
              <div className='pokeCard text-center' id='myTeam1' />
              <div className='pokeCard text-center' id='myTeam2' />
              <div className='pokeCard text-center' id='myTeam3' />
              {/* Display User Selected Pokemon Here */}
            </div>
            <div className='userButtons'>
              <button id='save' className='btn btn-warning btn-outline-danger warningbtn' type='button'>Save Team</button>
            </div>
          </div>
        </div>
        <div className='row' id='row'>
          <div className='col col-sm-6' id='col'>
            <h2 className='titleStyle font'>Matchups</h2>
            <hr></hr>
            <p id='matchupsText' className='titleStyle'>Select 3 enemy Pokemon to generate matchups.</p>
            <div className='d-flex' id='matchupName' />
            <div className='d-flex' id='result0' />
            <div className='d-flex' id='result1' />
            <div className='d-flex' id='result2' />
            <div className='d-flex' id='result3' />
            <div className='d-flex' id='result4' />
          </div>
          {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
          <div className='col col-12 col-md-6' id='col'>
            <h2 className='titleStyle font'>My Teams</h2>
            <hr></hr>
            <div id='teamArray'>
              <p className='titleStyle'>Please sign in to view saved teams.</p>
            </div>
          </div>
        </div>
      </div>

    </Html>
  )
}
module.exports = Home
