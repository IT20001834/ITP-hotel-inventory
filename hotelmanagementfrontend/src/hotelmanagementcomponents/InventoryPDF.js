import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


export default class InventoryPDF extends Component{
constructor(props){
super(props);

this.state={
    stockitems:[]
};
}

componentDidMount(){
    this.retrieveStockItems();
  }


  retrieveStockItems(){
    axios.get("http://localhost:8951/stockitems").then(res=>{
      if(res.data.success){
        this.setState({
          stockitems:res.data.existingStockitems
        });
        console.log(this.state.stockitems)
      }
    });
  }

render() {
return (


<div className="container" >
<table className="table table-bordered border-primary" style={{width:"100%"}}>
<tr>
<div style={{marginLeft:"80px", marginBottom:"200px"}}></div>
<div style={{marginLeft:"920px", marginTop:"-200px"}}>Amalya Reach Hotel,</div>
<div style={{marginLeft:"920px"}}>Moragahahena,</div>
<div style={{marginLeft:"920px"}}>Homagama</div>
</tr>
<br></br>
<div className="text-center">
             <p style={{color:'Black', fontSize:'30px', fontFamily:'Times New Roman'}}>Current stock Report</p>
</div>
<div style={{marginLeft:"80px"}}>--------------------------------------------------------------------------------------------------------------------------------------------</div>
<div className="container">
       
       
        <table className="table table-hover" style={{marginTop:'40px'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item No</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Item Type</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Added Date</th>
              <th scope="col">Supplier Id</th>
              <th scope="col">Order No</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.stockitems.map((stockitems,sindex)=>(
              <tr key={sindex}>
                <th scope="row">{sindex+1}</th>
                <td>{stockitems.stockitemId}</td>
                <td>{stockitems.stockitemName}</td>
                <td>{stockitems.stockitemQty}</td>
                <td>{stockitems.stockitemType}</td>
                <td>{stockitems.stockitemunitPrice}</td>
                <td>{moment(`${stockitems.itemaddedDate}`).format("MMM Do YY")}</td>
                <td>{stockitems.sisupplierId}</td>
                <td>{stockitems.siorderNo}</td>

                
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>


<br></br>
<br></br>
<div style={{marginLeft:"60px"}}>.........................</div>
<div style={{marginLeft:"80px", marginBottom:"100px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-143px"}}>...........................................................................</div>
<div style={{marginLeft:"860px", marginBottom:"100px"}}>(Signature by Manager)</div>
</table>
<br/>
</div>
)
}
}
