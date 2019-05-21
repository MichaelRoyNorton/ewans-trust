import React, {Component} from 'react';

class ContactModal extends Component {
  render() {
    return (
      <div className="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <img id="contactModalLabel" src={require('../images/ewans-trust-logo-black.svg')} className="contact-logo img-fluid" alt="Ewan Lane Music Foundation"/>
              <button type="button" className="btn btn-secondary close-modal-dark" data-dismiss="modal">X</button>
            </div>
            <div className="modal-body">
                <div className="row form-title justify-content-center">
                  <h3 className="contact-title">To contact the Ewan Lane Music Foundation for information about our awards or to provide support for the charity please either</h3>
                  <div className="row">
                    <div className="col-lg-2 col-sm-12">
                      <p>Email:</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <p><a href="mailto: admin@ewansmusic.org.uk">admin@ewansmusic.org.uk</a></p>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                      <p>Write to:</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <p>Ewan Lane Music Foundation <br/>
                       70 Leighcliff Road <br/>
                       Leigh on Sea <br/>
                       Essex <br/>
                       SS9 1DN</p>
                   </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default ContactModal;
