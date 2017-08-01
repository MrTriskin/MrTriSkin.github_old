import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//controls
//http://www.material-ui.com/#/components/select-field
/**
 * `SelectField` can also be nullable. In this case, just specify a `MenuItem`
 * with no text and with a `null` value. For instance, for a boolean:
 */
export default class SelectFieldNullable extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          hintText="性别 Gender"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={false} primaryText="男 Male" />
          <MenuItem value={true} primaryText="女 Female" />
        </SelectField>
      </div>
    );
  }
}
