import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        {/* navbar */}
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="https://i.pinimg.com/564x/51/8b/ff/518bff6c0ce9c7a2dcf3649523da7388.jpg" width="80" height="60" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-5" aria-current="page" href="#">Categories</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-5" aria-current="page" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-5" aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-5" aria-current="page" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          {/* Yan kategori */}
          <div className="col-3 mt-5 ps-15 fs-5 border border-start-0">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-black mt-5" aria-current="page" href="#">Kategori Maddesi</a>
              </li>

            </ul>
          </div>
          <div className="mb-5 col-9">
            <div className="row mb-5">
              {/* card bodyler  */}
              <div className="ms-auto mt-5">
                {/* card body ilk sıra */}
                <div className="row">
                  <div className="col-4 ">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card body 2.sıra */}
            <div className="row mb-5">
              <div className=" ms-auto mt-5">
                <div className="row">
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1280px-Altja_j%C3%B5gi_Lahemaal.jpg" className="card-img-top" alt="Card Image" />
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
