import React, { Component } from 'react';

class Community extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      users: [],
      photos: [],
      events: [
        {
          title: 'Korev',
          date: '12/05/2019',
          location: 'The Winchester',
          image: '../images/gigModal.jpg',
          info: 'Come along to see Korev play at the Winchester on 12th May',
        },
        {
          title: 'Korev',
          date: '21/07/2019',
          location: 'The Winchester',
          image: '../images/gigModal.jpg',
          info: 'Come along to see Korev play at the Winchester on 12th May',
        }
      ],
      loaded: false
    }
  }

  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))

    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({users: json}))

    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => this.setState({photos: json.map((photo) => photo.url)}))

    this.setState({
      loaded: true
    })
  }

  render() {
    return (
      <div className="light-bg">
        <div className="container community">
          {this.state.loaded ?
            <div className="row post-section">
              <div className="col-md-8">
                <h1>Updates from the <span className="red">Community</span></h1>
              </div>
              <div className="col-md-4 login-register">
                <button className="btn login">Log in</button>
                <button className="btn register">Register</button>
              </div>
              <div className="col-lg-8 col-md-10 col-sm-12 posts">
                <br />
                {this.state.posts.map((item, key) =>
                  <div className="row post" key={key}>
                    <div className="col-1">
                      <img className="music" src={require(`../images/note-${Math.floor((Math.random() * 3) + 1) }.svg`)} alt="music" />
                    </div>
                    <div className="col-11">
                      <h4>{item.title}</h4>
                      <h6>{this.state.users.map((user) =>
                        user.id === item.userId ? user.name : null
                      )}</h6>
                      <p>{item.body}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-4 upcoming-events">
                <h2>Upcoming fundraising events</h2>
                {this.state.events.map((event, key) =>
                  <div className="event" key={key}>
                    <h4>{event.date}</h4>
                    <h5>{event.title}</h5>
                    <p>{event.info}</p>
                  </div>
                )}
              </div>
            </div>
             : null}
        </div>
      </div>
    )
  }
}

export default Community;
