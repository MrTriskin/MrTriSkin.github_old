import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackGroundImage from '../image/urban-night-blur.jpg';
import TextInput from '../components/TextInput';
import RaisedButton from 'material-ui/RaisedButton';

class SignUp extends Component {
  render() {
    return (
       <div style = {{height: '100%',
         width: '100%',
         'backgroundImage': `url(${BackGroundImage})`,
         'backgroundPosition':'center'}}>
        <MuiThemeProvider >
          <div style = {{ margin: 'auto',
            padding: 400,
            maxWidth: 500}}>
            <div style = {{textAlign: 'center',
              margin: 'auto',
              padding: 45,
              'backgroundColor': 'rgba(255,255,255,0.75)',
              borderRadius: 10}}>
              <TextInput
              hintText = "email@example.com"
              underlineFocuseStyle = {{borderColor: 'rgba(66,165,245,0.8)'}}
              underlineStyle = {{borderColor: '#BDBDBD'}}/>
              <TextInput
              hintText = "Password"
              type = "password"
              name = "password"
              underlineFocuseStyle = {{borderColor: 'rgba(66,165,245,0.8)'}}
              underlineStyle = {{borderColor: '#BDBDBD'}}/>
              <TextInput
              hintText = "PasswordAgain"
              type = "password"
              name = "password"
              underlineFocuseStyle = {{borderColor: 'rgba(66,165,245,0.8)'}}
              underlineStyle = {{borderColor: '#BDBDBD'}}/>
              <RaisedButton
                label = "Sign Up"
                backgroundColor = 'rgba(66,165,245,0.8)'
                labelColor = '#F5F5F5'
                href = "/log/2"
                style = {{marginTop:15}}/>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default SignUp;
