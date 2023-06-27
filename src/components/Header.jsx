import "../css/header.css"
import cookie from "../assets/cookie.png"
function Header() {

    return (
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand cookiespacer" href="#">
            <img src={cookie} alt="Rotten Cookies Logo" className="logo" style={{ width: "30px", height: "30px" }} /> Rotten Cookies
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
      <ul className="navbar-nav align-items-baseline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Genres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RunTimes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Actors</a>
        </li>
         <li className="nav-item me-5">
          <a className="nav-link disabled">Eras</a>
        </li>
        <li>
           <div className="input-group input-group-sm mb-3"> 
          <span className="input-group-text" id="inputGroup-sizing-sm">
            🔎
          </span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
