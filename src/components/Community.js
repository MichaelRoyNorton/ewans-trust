import React, { Component } from 'react';

class Community extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      users: [],
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
      ]
    }
  }

  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))

    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({users: json}))

    this.setState({
      loaded: true
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="container community">
        <div className="row post-section">
          <h1>Updates from the <span className="red">Community</span></h1>
          <div className="col-8 posts">
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
                <button className="btn event-sign-up">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>

    )
  }
}

export default Community;
