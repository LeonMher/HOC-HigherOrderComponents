import React from "react";

const WithCount = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleFunc = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalComponent
          handleFunc={this.handleFunc}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCount;
