import React, { Component } from "react";
import { Steps, Hints } from "intro.js-react";

export default class TourGuide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepsEnabled: this.props.enabled,
      initialStep: this.props.initialStep,
      steps: this.props.steps,
    };
  }

  render() {
    const { stepsEnabled, steps, initialStep } = this.state;
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <Steps
          enabled={this.state.stepsEnabled}
          steps={this.state.steps}
          initialStep={this.state.initialStep}
          onExit={this.onExit}
        />
      </div>
    );
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };
}
