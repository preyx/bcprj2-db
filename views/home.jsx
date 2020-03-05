const React = require('react')
const Html = require('./layouts/default')

const Home = props =>{
  return(
    <Html>
      {props.name}
     
     
     
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
  <div class="container-fluid">
    <div class="row" id="row">
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
  <div class="col col-sm-6" id="col">
    <h1>Enemy Team</h1>
    <div class="flexContainer w-100">
    </div>

    <button class="btn btn-outline-success btn-warning" style="color: red;" type="button">Generate Team</button>
    <input type="checkbox" id="legendary" name="legendary" value="pokemon" />
    <label for="legendary">No Legendaries</label> <br />
      <h2>Results</h2>
      <div class="flexContainer">

      </div>
      <div class="flexContainer">

      </div>
      <div class="flexContainer">

      </div>
      <div class="flexContainer">

      </div>
      <div class="flexContainer">

      </div>
  </div>
                <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div class="col col-sm-6" id="col">
      <h1>Enemy Team</h1>
      <div class="flexContainer">

      </div>
      <h1> Your Team</h1>
      <div class="flexContainer">
      </div>
      <button class="btn btn-outline-success btn-warning" style="color: red;" type="button">Remove Team</button>
      <button class="btn btn-outline-success btn-warning" style="color: red;" type="button">Generate Random Name</button>
      <h2>Random Name Generator Results</h2>
      
    </div>
  </div>








    </Html>
  )
}
module.exports = Home