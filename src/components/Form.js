import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import "./Form.css"
import Dialog from "./Dialog";


class Form extends Component {
    state = {
        email: '',
        trulyFilled:true
    }
 

    handleSubmit = (event) => {
        // your submit logic
        const wordReg=/^[a-z]+$/i;
        const wordReg2=/^\w+(\s+\w+)*$/i;
        const numReg=/^[0-9]+$/i;
        event.preventDefault();
        var e_tar=event.target;
        console.log(wordReg2.test(e_tar.name.value));
        //checking for corect submission
        if(!wordReg.test(e_tar.sym.value)||
        (!wordReg.test(e_tar.name.value)&&!wordReg2.test(e_tar.name.value))||
        !numReg.test(e_tar.supply.value)||
        !numReg.test(e_tar.decimals.value)
        ) {
          this.setState({trulyFilled:false});
          return;
        }

        else {
          this.props.genrateToken(e_tar.sym.value,e_tar.name.value,e_tar.supply.value,e_tar.decimals.value);
        }
    }
 
  render() {
    return (
      <div>
        <div className="parent">
           <div className="child">
           <form className="data-form" onSubmit={this.handleSubmit.bind(this)}>
        
               <input required type="text" name="sym" placeholder="Token Symbol"/>
               <input required type="text" name="name" placeholder="Token Name"/>
               <input required type="number" name="supply" placeholder="Max Supply"/>
               <input required type="number" name="decimals" placeholder="Decimals"/>
                <br/>
               <button type="submit">Submit</button>
            </form>
           </div>
           <i className="fa fa-bitcoin" style={{"fontSize":"80px","color":"white","position":"absolute","marginLeft":"44%","marginTop":"65px"}}></i>
        </div>
        {!this.state.trulyFilled?<Dialog/>:""}
      </div>
    );
  }
}

export default Form;
