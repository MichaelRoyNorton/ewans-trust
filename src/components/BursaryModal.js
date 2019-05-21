import React, {Component} from 'react';

class BursaryModal extends Component {
  render() {
    return (
      <div className="modal fade" id="bursaryModal" tabindex="-1" role="dialog" aria-labelledby="bursaryModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="bursaryModalLabel">Bursary Awards</h3>
              <button type="button" className="btn btn-secondary close-modal" data-dismiss="modal">X</button>
            </div>
            <div className="modal-body">
              <h3>An annual award of up to 10 x Assisted music bursaries and 1x Ewan Lane Drum Scholarship.</h3>
              <p>Financial awards will be used to pay the cost of tuition and be made directly to the tutor or school.</p>
              <p>Applications may be made by parents/carers on behalf of the child/young person</p>
              <p>Applications may be made on recommendation from a school or agency by a recognized member (head/head of department/ leader)</p>
              <p>Applications will be reviewed by trustees and awarded on the basis of:</p>
              <ul>
                <li>Musical potential – as advised by the Trustee with specialist knowledge for music</li>
                <li>Learning Aptitude – as referenced by the school /agency; as advised by the Trustee(s) with specialist knowledge</li>
                <li>Personal supporting statement (Parent/carer or child)</li>
                <li>In the case of the Ewan Lane Drum Scholarship applications will be reviewed in conjunction with the Essex Percussion Academy and will recognize potential and talent.</li>
                <li>Evidence of need including income support/pupil premium or other benefits</li>
              </ul>
              <button className="btn btn-primary contact-button contact-toggle" data-toggle="modal" data-target="#contactModal" data-dismiss="modal">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BursaryModal;
