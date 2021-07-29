import * as React from 'react';

class TsugiWelcome extends React.Component {
  render() {
    return <h1>Tsugi says Hello, {this.props.name}</h1>;
  }
}

export { TsugiWelcome };
