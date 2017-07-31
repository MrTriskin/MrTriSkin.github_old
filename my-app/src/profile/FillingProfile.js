import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackGroundImage from '../image/urban-night-blur.jpg';
import VerticalNonLinear from './VerticalNonLinearStepper';
import TextFieldInfo from './TextFieldInfo';

class FillingProfile extends Component {
  render() {
    return (
      <div style = {{'backgroundImage': `url(${BackGroundImage})`,'backgroundRepeat':'no-repeat','backgroundPosition':'center','alignContent':'space-between'}}>
        <MuiThemeProvider >
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <VerticalNonLinear />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default FillingProfile;
