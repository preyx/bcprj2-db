const React = require('react')
const Html = require('./layouts/default')

const Home = props =>{
  return(
    <Html>
      {props.list}
     
    {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
<div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <h5 id="welcome"></h5>
      <p className="errorMessage" id = "error"></p>
    </div>
  </div>
  <div className="row pokeSearch">
    <div className="col-12">
    <form>
      <div className="form-group">
        <label forhtml="pokemonSeawrch">Search Opposing Pokemon</label>
        <input type="text" className="form-control" id="pokemonSearch" aria-describedby="emailHelp"/>
      </div>
      <button type="submit" className="btn btn-primary" id = "search">Search</button>
    </form>
    <p className="errorMessage" id="searchError"></p>
  </div>
  </div>
  <div className="row" id="row">
            {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
  <div className="col-12 col-md-3 titleStyle">
    <h3>Enemy Team</h3>
    <hr></hr>
    <div className = "col-12 col-md-9" id="enemyDisplay"></div>
    <div className="col-12 col-md-3" id = "enemyTeam">
      {/* Display enemery team here */}
    </div>
    {/* <div className="flexContainer w-100">
    </div>

    <button className="btn btn-outline-success btn-warning warningbtn" type="button">Generate Team</button>
    <input type="checkbox" id="legendary" name="legendary" value="pokemon" />
    <label htmlFor="legendary">No Legendaries</label> <br />
      <h2>Results</h2>
      <div className="flexContainer">

      </div>
      <div className="flexContainer">

      </div>
      <div className="flexContainer">

      </div>
      <div className="flexContainer">

      </div>
      <div className="flexContainer">

      </div> */}
  </div>
                {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
    {/* <div className="col col-sm-6" id="col">
      <h1>Enemy Team</h1>
      <div className="flexContainer">

      </div>
      <h1> Your Team</h1>
      <div className="flexContainer">
      </div>
      <button className="btn btn-outline-succ" type="button">Remove Team</button>
      <button className="btn btn-outline-succ" type="button">Generate Random Name</button>
      <h2>Random Name Generator Results</h2>
      
    </div> */}
  </div>
</div>

  </Html>
  )
}
module.exports = Home