const React = require('react')

const Html = props => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="style.css"></link>
        <title>PokeBattles</title>
      </head>
      <body>
        {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ NavBar ~~~~~~~~~~~~~~~~~~~~~~~~ --> */}

  <nav className ="navbar navbar-light bg-primary flexContainer">
          <div className= "row imageStyle">
          <div id="logo">
            <img src='./assets/logo.png'></img>
          </div>
          <br></br>
          </div>
          <div className="row">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <input type="text"  className="form-control" placeholder = "Enter Username Here"aria-label="Username"
                aria-describedby="basic-addon1" id = "username" />
            </div>
              <div className= "userButtons">
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id = "signIn">Sign In</button>
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id = "create">Create Account</button>
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id = "signOut">Sign Out</button>
            </div> 
          </form>
          </div>
        </nav>

        {props.children}
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        <script src="./app.js"></script>
      </body>
    </html>
      )
    }

module.exports = Html
