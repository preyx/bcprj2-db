const React = require('react')
const Html = require('./layouts/default')

const List = props =>{
  return(
    <Html>
      {props.item.map(item =>
        <div className="card p-1">
          <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif"
            className="card-img-top img-fluid" alt="..." />
          <h1>Title</h1>
          <div className="card-body p-0">
           <ul>
             <li>
              {item}
             </li>
            </ul>
          </div>
        </div>
        )}
    </Html>
  )
}

        <div class="card p-1">
          <img src="http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif"
            class="card-img-top img-fluid" alt="..." />
            <h1>Title</h1>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <!-- type 1 -->
                <li class="list-group-item">
                  grass
                </li>
                <!-- type 2 -->
                <li class="list-group-item">
                  poison
                </li>
                <!-- base hp -->
                <li class="list-group-item">
                  45
                </li>
                <!-- base att -->
                <li class="list-group-item">
                  65
                </li>
                <!-- base def -->
                <li class="list-group-item">
                  49
                </li>
                <!-- base spec -->
                <!-- <li>

                </li> -->
              </ul>
            </div>
          </div>