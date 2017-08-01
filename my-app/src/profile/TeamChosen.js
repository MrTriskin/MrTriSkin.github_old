import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class TeamChosen extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <div style={{width: '600', margin: 'auto', 'background-color': 'rgba(79,195,247,0.15)', 'flex': 3}}>
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>团队 Team</TableHeaderColumn>
            <TableHeaderColumn>状态 Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>Group1</TableRowColumn>
            <TableRowColumn>components</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>Group2</TableRowColumn>
            <TableRowColumn>components</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>Group3</TableRowColumn>
            <TableRowColumn>components</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>Group4</TableRowColumn>
            <TableRowColumn>components</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    <RaisedButton label="confirm" fullWidth={true} backgroundColor='#2196F3' href = '/log'/>
    </div>
    );
  }
}
