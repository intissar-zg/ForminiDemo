import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">Ready to start with us? Send us a messages and we will get back to you as soon as possible!</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
            
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Name input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <label htmlFor="name">FullName</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                {/* Email address input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label htmlFor="email">Email </label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                {/* Phone number input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <label htmlFor="phone">Telephone number</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                {/* Message input*/}
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
    
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
             
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                {/* Submit Button*/}
                <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
              </form>
            </div>
          </div>
         
        </div>
      </section>
        </div>
    )
}

export default Contact
