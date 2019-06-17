import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      pictures: [
        {
          title: "Snorkeling",
          url:
            "https://st2.depositphotos.com/1355276/6304/i/950/depositphotos_63045349-stock-photo-sexy-girl-snorkeling-in-maldives.jpg"
        }
      ]
    };
  }

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleUrl = e => {
    this.setState({
      url: e.target.value
    });
  };

  handleSubmit = e => {
    const { title, url, pictures } = this.state;
    console.log(pictures);
    e.preventDefault();
    if (url) {
      this.setState({
        url: "",
        title: "",
        pictures: [
          ...pictures,
          {
            title,
            url
          }
        ]
      });
    } else {
      this.setState({
        url: "",
        title: ""
      });
    }
  };
  render() {
    const { pictures } = this.state;
    console.log(this.state);
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="url"
              placeholder="Enter URL"
              onChange={this.handleUrl}
            />
            <br />
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleTitle}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="pictures">
          {pictures.map((ele, index) => {
            return (
              <div className="picture" key={index}>
                <h1>{ele.title}</h1>
                <img src={ele.url} alt={ele.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
