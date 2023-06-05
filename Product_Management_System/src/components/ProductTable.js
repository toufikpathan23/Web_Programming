import { useState } from 'react';
const ProductTable = (props) => {
    let [prodname, setprodname] = useState("")
    var flag=false;
    var addprodtoarray = () => {

        var flag=props.arrdata.includes(prodname);
        if(prodname===""||flag)
        {
            alert("please insert name or name already exist");
        }else{
        props.addmethod(prodname);
        //console.log(props.arrdata)
        setprodname("");
        }

    }
    let rendertable = props.arrdata.map((elem, index) => 
        <tr key={index}>{elem}</tr>
    )
    
    return (
        <div>

            PName:<input type="text" name="prd" id="prd" value={prodname} onChange={(event) => { setprodname(event.target.value) }} />

            <button type="button" name="btn" id="btn" value="btn" onClick={addprodtoarray}>Add Product</button>
            <p>
                
            </p>
            <table border='2' align="center">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    </tr>
                </thead>
                <tbody>

                {rendertable}
                </tbody>
            </table>

        </div>
    )
}

export default ProductTable;