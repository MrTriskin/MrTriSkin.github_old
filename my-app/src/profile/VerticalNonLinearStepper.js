import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextFieldInfo from './TextFieldInfo';
import Notifications from './Notifications';
import TeamChosen from './TeamChosen';
var steps = ['说明','团队状态确认','代表信息填报','缴费','完成']
/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex, finished} = this.state;
    if (stepIndex < steps.length) {
      this.setState({stepIndex: stepIndex + 1,
      finished: stepIndex >= steps.length - 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < steps.length - 1&& (
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
      )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
        )}
        {step == steps.length - 1 && (
        <RaisedButton
          label="Finish"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          href="/log"
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
      )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{margin:'auto'}}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{width: 270, marginRight: 5, 'flex':1, 'background-color':'rgba(255,255,255,0.95)'}}>
            <Stepper
              activeStep={stepIndex}
              linear={false}
              orientation="vertical"
            >
              <Step>
                <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
                  说明
                </StepButton>
                <StepContent>
                  <p>This is Notification about UMUNC</p>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                  团队状态确认
                </StepButton>
                <StepContent>
                  <p>Choose a team you belong to! And have fun mannnn!</p>
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                  代表信息填报
                </StepButton>
                <StepContent>
                  <p>
                    In this very part, you should filling up your profiles. And please feel free to 'Save' any times.
                  </p>
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
              <Step>
                <StepButton onTouchTap={() => this.setState({stepIndex: 3})}>
                  缴费
                </StepButton>
                <StepContent>
                  <p>
                    Everyone have to pay you know.
                  </p>
                  {this.renderStepActions(3)}
                </StepContent>
              </Step>
              <Step>
                <StepButton onTouchTap={() => this.setState({stepIndex: 4})}>
                  完成
                </StepButton>
                <StepContent>
                  <p>
                    YES! you finally did this!!!
                  </p>
                  {this.renderStepActions(4)}
                </StepContent>
              </Step>
            </Stepper>
            </div>
            <div>
              {stepIndex == 0?<Notifications/>:null}
              {stepIndex == 2?<TextFieldInfo />:null}
              {stepIndex == 1?<TeamChosen />:null}

          </div>
        </div>
    </div>
    );
  }
}

export default VerticalNonLinear;
