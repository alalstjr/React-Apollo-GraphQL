import React, { Component } from "react";

import { HashRouter as Router, Route } from "react-router-dom";
// app 은 router 가 될것

import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

// Component
import Home from "./Home";
import Detail from "./Detail";

import "@babel/polyfill";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
            {/* Router에서 exact 란 정확한 키워드가 path 에 들어왔을경우 렌더링해줍니다. */}
          </React.Fragment>
          {/* React.Fragment 란 DOM에 별도 노드를 추가하지 않고 자식 목록을 그룹화할 수 있습니다.*/}
        </Router>  
      </ApolloProvider>
    );
  }
}

export default App;


