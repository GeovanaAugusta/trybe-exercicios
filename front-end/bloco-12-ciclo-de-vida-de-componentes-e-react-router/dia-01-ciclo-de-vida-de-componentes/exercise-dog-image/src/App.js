import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.image.message.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate() {
    const { image } = this.state;
    localStorage.setItem('url', image.message);
    localStorage.getItem('url');
    alert(image.message.split('/')[4]);
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ image: data }));
  }

  render() {
    const { image } = this.state;

    if (image === '') return 'loading...';
    return (
      <div>
        <h1>Dogs</h1>
        <button type="button" onClick={ this.fetchDog }>Next dog </button>
        <div>
          <img src={ image.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;

// Fazer bônus depois https://github.com/GeovanaAugusta/exercise-dog-image
