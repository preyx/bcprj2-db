const React = require('react')

const Html = props => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        {/* <!-- Font Awesome --> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        {/* <!-- Google Fonts --> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {/* <!-- Bootstrap core CSS --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        {/* <!-- Material Design Bootstrap --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.14.0/css/mdb.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="style.css"></link>
        <title>PokeBattles</title>
      </head>
      <body>
        {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ NavBar ~~~~~~~~~~~~~~~~~~~~~~~~ --> */}

        <nav className="navbar navbar-light bg-primary flexContainer">
          {/* logo */}
            {/* <div className="row imageStyle" > */}
              <div id="logo">
                <img src='./assets/logo.png'></img>
                <br/>
                <br/>
              </div>
            
            {/* </div> */}
          {/* <!-- Collapse button --> */}
          <button class="dropdown navbar-toggler toggler-example red darken-3" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false"
            aria-label="Toggle navigation"><span className="white-text"><i className="fas fa-bars fa-1x"></i></span></button>

          {/* <!-- Collapsible content --> */}
          <div className="collapse navbar-collapse show" id="navbarSupportedContent41">
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input type="text" className="form-control" placeholder="Enter Username Here" aria-label="Username"
                  aria-describedby="basic-addon1" id="username" />
              </div>
              <div className="userButtons">
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id="signIn">Sign In</button>
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id="create">Create Account</button>
                <button className="btn btn-warning btn-outline-danger warningbtn" type="button" id="signOut">Sign Out</button>
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
