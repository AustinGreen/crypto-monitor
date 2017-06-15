import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
    this.fetchPrice = this.fetchPrice.bind(this);
  }

  fetchPrice() {
    fetch('https://api.lionshare.capital/api/prices')
      .then(response => response.json())
      .then(result => this.setState({ price: result.data.BTC[12] }));
    console.log('Price Updated');
  }

  componentDidMount() {
    this.fetchPrice();
  }

  render() {
    return (
      <div>
        <section className="hero is-dark is-fullheight">
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    <img src="images/bulma-type-white.png" alt="Logo" />
                  </a>
                </div>
                <span className="nav-toggle">
                  <span />
                  <span />
                  <span />
                </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item is-active">
                    Home
                  </a>
                  <a className="nav-item">
                    Examples
                  </a>
                  <a className="nav-item">
                    Documentation
                  </a>
                  <span className="nav-item">
                    <a className="button is-success is-inverted">
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Title
              </h1>
              <h2 className="subtitle">
                Subtitle
              </h2>
              <p>{`The price of bitcoin is ${this.state.price}`}</p>
              <button onClick={() => this.fetchPrice()}>Get</button>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Vertical...</p>
                      <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">...tiles</p>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Middle tile</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/640x480.png" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content" />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github" />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
