import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import awsconfig from "./aws-exports";

import * as queries from "./graphql/queries";

Amplify.configure(awsconfig);

export default class App extends React.Component {
  state = {
    rewards: [],
  };
  async componentDidMount() {
    const allRewards = (await API.graphql({ query: queries.listRewards })).data.listRewards.items;
    console.log("allRewards = ", allRewards);
    this.setState({ rewards: allRewards });
  }
  render() {
    return (
      <AmplifyAuthenticator>
        <div className="App">
          <AmplifySignOut />
          {this.state.rewards.map((reward) => (
            <div className="reward-item" key={reward.id}>
              {reward.title}
            </div>
          ))}
        </div>
      </AmplifyAuthenticator>
    );
  }
}
