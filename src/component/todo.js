import React, { Component } from 'react'

class todo extends Component {


    render() {
        return (
            <div>
                 <div className="container">
      <h1>To-Do App!</h1>
      <h4>Add new To-Do</h4>
      <input type="text" placeholder="Enter new task" className="add" /> <br />
      <input type="submit" value="Add" className="subm" id="btnsub" />
    </div>
    <main>
      <div className="container-fluid">
        <h1>Let's get some work done!</h1>
        <hr style={{ width: "80px"}}/>
        <div className="row">
          <div className="col-4 " id="demoList">
          
          </div>
        </div>
      </div>
    </main>
            </div>
        )
    }
}
export default todo