import React, { Component } from "react";
class todo extends Component {
  state = {
    item: "",
    listtodo: [],
    complit: "complit"
  };
  getinput = e => {
    this.setState({ item: e.target.value });
  };
  addtodo = () => {
    this.setState({ listtodo: [...this.state.listtodo, this.state.item] });
  };
  complit = () => {
    this.setState({
      complit: this.state.complit === "complit" ? "undo" : "complit"
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>To-Do App!</h1>
          <h4>Add new To-Do</h4>
          <input
            type="text"
            placeholder="Enter new task"
            className="add"
            onChange={this.getinput}
          />{" "}
          <br />
          <input
            type="submit"
            value="Add"
            className="subm"
            id="btnsub"
            onClick={this.addtodo}
          />
        </div>
        <main>
          <div className="container-fluid">
            <h1>Let's get some work done!</h1>
            <hr style={{ width: "80px" }} />
            <div className="row">
              <div className="col-4 " id="demoList">
                <ul>
                  <li>
                    <span>
                      {this.state.listtodo.map((el, i) => (
                        <div key={i}>
                          <button onClick={this.complit}>
                            {this.state.complit}
                          </button>
                          <button> delete</button>
                          <span className={this.state.complit}>{el}</span>
                        </div>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default todo;
