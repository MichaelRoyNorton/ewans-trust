import React, {Component} from 'react';

class WorkshopModal extends Component {
  render() {
    return (
      <div className="modal fade" id="workshopModal" tabindex="-1" role="dialog" aria-labelledby="workshopModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="workshopModalLabel">Annual Workshops</h3>
              <button type="button" className="btn btn-secondary close-modal" data-dismiss="modal">X</button>
            </div>
            <div className="modal-body">
              <p>The 4 annual workshops will be available to all those children and young people who express a desire and aptitude to participate in music making. Parents/carers may request a place and should there be limited places available priority will be given:</p>
              <ul>
                <li>To those referred by their school(s) or other agencies as deserving of a place</li>
                <li>To those in receipt of income support/ pupil premium or other benefits</li>
                <li>Children with a disability who can benefit from the programme will be awarded a workshop place.</li>
              </ul>
              <button className="btn btn-primary contact-button contact-toggle" data-toggle="modal" data-target="#contactModal" data-dismiss="modal">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkshopModal;
