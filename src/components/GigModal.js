import React, {Component} from 'react';

class GigModal extends Component {
  render() {
    return (
      <div className="modal fade" id="gigModal" tabindex="-1" role="dialog" aria-labelledby="gigModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="gigModalLabel">GIVE a GIG</h5>
            </div>
            <div className="modal-body">
              <h3>If you're interested in supporting a Ewan's Trust fundraising event please complete the form below</h3>
                <form>
                  <div class="row">
                    <div class="col">
                      <label>First name</label>
                      <input type="text" class="form-control" placeholder="John" />
                    </div>
                    <div class="col">
                      <label>Last name</label>
                      <input type="text" class="form-control" placeholder="Smith" />
                    </div>
                    <div class="col">
                      <label>Email</label>
                      <input type="email" class="form-control" placeholder="example@hello.com" />
                    </div>
                  </div>
                </form>
            </div>
            <div className="modal-footer">

              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GigModal;
