import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackGroundImage from '../image/urban-night-blur.jpg';
import RaisedButton from 'material-ui/RaisedButton';

class User extends Component {
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
              <p>HAVEN'T COMPLETE! DUD!</p>
              <RaisedButton
                label = "BACK"
                backgroundColor = 'rgba(66,165,245,0.8)'
                labelColor = '#F5F5F5'
                href = "/"
                style = {{marginTop:15}}/>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default User;
