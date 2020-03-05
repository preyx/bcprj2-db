const React = require('react')
const Html = require('./layouts/default')

const Home = props =>{
  return(
    <Html>
      {props.list}
     
    {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
<div className="container-fluid">
  <div className="row" id="row">
            {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
  <div className="col col-sm-6" id="col">
    <h1>Enemy Team</h1>
    <div className="flexContainer w-100">
      <div id ="test"></div>
    </div>

    <button className="btn btn-outline-success btn-warning warningbtn" type="button">Generate Team</button>
    <input type="checkbox" id="legendary" name="legendary" value="pokemon" />
    <label for="legendary">No Legendaries</label> <br />
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

      </div>
  </div>
                {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~ col2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> */}
    <div className="col col-sm-6" id="col">
      <h1>Enemy Team</h1>
      <div className="flexContainer">

      </div>
      <h1> Your Team</h1>
      <div className="flexContainer">
      </div>
      <button className="btn btn-outline-succ" type="button">Remove Team</button>
      <button className="btn btn-outline-succ" type="button">Generate Random Name</button>
      <h2>Random Name Generator Results</h2>
      
    </div>
  </div>
</div>

  </Html>
  )
}
module.exports = Home