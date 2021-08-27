import React from 'react'

const Service = () => {
    return (
        <div>
           <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">Our services</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-people-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Experienced trainers</h3>
                <p className="text-muted mb-0">Our experienced trainers in the professional field</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-laptop fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Quality training</h3>
                <p className="text-muted mb-0">Our training is of high quality and certified.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Friendly environment</h3>
                <p className="text-muted mb-0">We offer training in a friendly and warm working environment!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-award-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Well-studied prices</h3>
                <p className="text-muted mb-0">We regularly offer training courses offered at reasonable prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}

export default Service
