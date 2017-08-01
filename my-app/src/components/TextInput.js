import React from 'react';
import TextField from 'material-ui/TextField';
import {red500, blue500} from 'material-ui/styles/colors';

//style and controls
/*http://www.material-ui.com/#/components/text-field*/

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      shouldbechar: false,
      shouldbenum: false,
      telerror: false,
      iderror: false,
      password2short: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      shouldbechar: !(isNaN(event.target.value))&&(this.props.name == "string"),
      shouldbenum: (isNaN(event.target.value))&&(this.props.name == "num"),
      telerror: ((isNaN(event.target.value))|(event.target.value.length!=11))&&(this.props.name=="tel"),
      iderror: (event.target.value.length!=18)&&(this.props.name=="cid"),
      password2short: (event.target.value.length < 8)&&(this.props.name=="password"),
    });
  };

  render() {
    return (
      <div>
        <TextField
          id = "inputText"
          hintText = {this.props.hintText}
          value={this.state.value}
          onChange={this.handleChange}
          errorText=""
          underlineFocusStyle={this.props.underlineFocuseStyle}
          name = {this.props.handleType}
          type = {this.props.type}
          underlineStyle = {this.props.underlineStyle}
        />
        {this.state.shouldbechar?<p style={{color:red500}}>·Aha! It should be string!</p>:null}
        {this.state.shouldbenum?<p style={{color:red500}}>·Aha! It should be number!</p>:null}
        {this.state.telerror?<p style={{color:red500}}>·Aha! This telephone number should be numbers and have 11 nums!</p>:null}
        {this.state.iderror?<p style={{color:red500}}>·Aha! This id should have 18 nums!</p>:null}
        {this.state.password2short?<p style={{color:red500}}>·Aha! Password shorter than 8 chars!</p>:null}
      </div>
    );
  }
}
