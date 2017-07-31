import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default (input, hint: string) => class SelectFieldMultiSelect extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return input.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={false}
        hintText={hint}
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}
