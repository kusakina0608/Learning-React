import { Component } from 'react';

class MySample extends Component {
  state = {
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick2 = () => {
    console.log(this.state.color);
    this.setState({
      color: '#000000',
    });
    console.log(this.state.color);
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('compontDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상:', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          Sample
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick2}>색 초기화</button>
      </div>
    );
  }
}

export default MySample;
