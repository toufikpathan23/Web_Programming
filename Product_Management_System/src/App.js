
import './App.css';

import React,{component} from 'react'
import ProductTable from './components/ProductTable';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={//state object
      name:"jhjhd",
      arr:["Pen","Notebook","Pencil"]
    }
  }
  addproduct=(prod)=>{
    this.setState({...this.state,arr:[...this.state.arr,prod]})
  }
  


  

  render () {
  return (
    <div className="App">
      <h2 className="heading">Product Management System</h2>
    <ProductTable arrdata={this.state.arr} addmethod={this.addproduct}></ProductTable>
       
    </div>
  );
 }
 }

export default App;
