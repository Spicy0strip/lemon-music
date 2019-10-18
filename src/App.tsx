import * as React from 'react';
import TopNav from './componnets/Topnav/index';
import Play from "./componnets/Player/Play";


class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <TopNav/>
        <Play/>
      </React.Fragment>
    );
  }
}

export default App;
