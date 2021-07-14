import React ,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan.js'
class App extends  Component{
  state = {
    items : [],
    Text : ""
  }
  handlechange = e => {
    this.setState({Text : e.target.value})
  }
  handleAdd = e =>{
    if(this.state.Text !== ""){
      const items=[this.state.items , this.state.Text];
      this.setState({ items : items, Text: ""})
    } 
  }
  render(){
    return( 
      <div>
        <div className="container-fluid my-5">
        <div className="row">
        <div className="col-md-6 mx-auto text-white shadow-lg p-1" >
          <h2 className="text-center ">ToDay's Plain</h2>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder="enter yout plain" 
                    value={this.state.Text} onChange={this.handlechange}/>
            </div>
            <div className="col-3">
                    <button className="btn btn-success px-3 font-weight-bold"
                      onClick={this.handleAdd}>ADD</button>
            </div>
            <div className="container-fluid my-5">
              <ul className="list-unstyled row  ">
             {
               this.state.items.map((value, i)=> {
                 return  <Plan  value={value}/>;
               })
             }
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

    )
  }
}

export default App;
