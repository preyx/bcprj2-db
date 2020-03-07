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
        <input type="text" className="form-control" id="pokemonSearch"/>
      </div>
      <button type="submit" className="btn btn-primary" id = "search">Search</button>
    </form>
    <p className="errorMessage" id="searchError"></p>
  </div>
  </div>
  <div className="row">
  <div className="col-12 titleStyle">
    <h3>Enemy Team</h3>
    <hr></hr>
  </div>
  </div>
  <div className = "row" id = "enemyDisplay">
      {/* display enemy team here */}
  </div>

  <Html/>
  )
}
module.exports = Home