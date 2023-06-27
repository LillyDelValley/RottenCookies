import "../css/header.css"
import cookie from "../assets/cookie.png"
function Header() {

    return (
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
            <img src={cookie} alt="Rotten Cookies Logo" className="logo" style={{ width: "30px", height: "30px" }} /> Rotten Cookies
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
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
         <li className="nav-item">
          <a className="nav-link disabled">Eras</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
