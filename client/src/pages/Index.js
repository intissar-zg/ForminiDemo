import React from 'react'
import '../css/styles.css'


const Index = () => {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="index.html">Formini Training</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">Registre</a></li>
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Registre Instructor</a></li>
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Page Header*/}
      <header className="masthead" style={{backgroundImage: 'url("bg2.jpg")'}}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>learn by doing </h1>
                <span className="subheading">E learning Plateform</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">What We Do</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-people-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-laptop fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-award-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Index
