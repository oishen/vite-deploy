import React from 'react'

const App = () => {
    return (
        <div>
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./assets/react.svg" alt="Los Angeles" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="./assets/react.svg" alt="Chicago" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="./assets/react.svg" alt="New York" className="d-block w-100"/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container-fluid mt-3">
  <h3>Carousel Example</h3>
  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
</div>
        </div>
    )
}

export default App