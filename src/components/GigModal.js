import React, {Component} from 'react';

class GigModal extends Component {
  render() {
    return (
      <div className="modal fade" id="gigModal" tabindex="-1" role="dialog" aria-labelledby="gigModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="gigModalLabel">Give a Gig</h5>
            </div>
            <div className="modal-body">
              <p>Are you part of the SE Essex music scene? We would love to help you in your music making by giving you an opportunity to be part of an initiative to support children who don’t get to make music because of who they are, where they live or what they are going through. Use our website to promote your music in return for supporting us through fundraising or Give a Gig.</p>
              <h4>What is Give a Gig?</h4>
              <p>It’s combining music and fundraising, with as many gigs as possible taking place around the SE Essex area – all organised by you, our amazing supporters, including SOSLAM.</p>
              <h4>What's it all in aid of?</h4>
              <p>Give a Gig is an initiative to raise funds for Ewan’s Music. We’re a charity investing in music-making projects for children and young people and providing financial support for those who cannot afford to continue music lessons.</p>
              <h4>How do I get involved?</h4>
              <p>We’re asking you to put on a gig or make an existing gig a Ewan’s Music fundraiser. Your gig can be any size, any genre, anywhere!</p>
              <p>Whether you’re a musician, promoter, venue owner, or simply want to use the power of music to help young people. Your first step is to register with Ewan’s Music at <a href="mailto: admin@ewansmusic.org.uk">admin@ewansmusic.org.uk</a> or contact us at <a href="tel: 01702475762">01702475762</a>.</p>
              <h4>How will Ewan’s Music support me?</h4>
              <p>You’ll get an event page on the Ewan’s Music website where you can showcase your gig details, artist photos, videos and social media links.</p>
              <h4>How do I fundraise?</h4>
              <p>The simplest way to raise funds is to donate a percentage of the proceeds from your ticket sales. You could also add a donation (such as £1) on top of an existing ticket price, or simply have a voluntary contribution on the door.</p>
              <h4>How will my fundraising make a difference?</h4>
              <p>The money you raise will help Ewan’s Music invest in music-making projects and support music tuition for children in need in SE Essex. With your support, we can transform many more young lives.</p>
              <h4>How do I pay in the money I’ve raised?</h4>
              <p>Once your gig’s taken place, you can pay your money in through our donate link on the website or through the charity’s bank account (contact us for details). We’re grateful for every penny you may raise.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GigModal;
