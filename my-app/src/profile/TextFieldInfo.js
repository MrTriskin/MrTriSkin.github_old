import React from 'react';
import TextInput from '../components/TextInput';
import TextField from 'material-ui/TextField';
import SelectFieldNullable from './SelectFieldNullable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectFieldMultiSelect from '../components/SelectFieldMultiSelect';
import VerticalNonLinear from './VerticalNonLinearStepper';
import RaisedButton from 'material-ui/RaisedButton';

const prov = [
  '上海市',
  '江苏省',
  '浙江省',
  '安徽省',
  '北京市',
  '天津市',
  '广东省',
  '河北省',
  '河南省',
  '山东省',
  '湖北省',
  '湖南省',
  '江西省',
  '福建省',
  '四川省',
  '重庆市',
  '广西省',
  '山西省',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '贵州省',
  '陕西省',
  '云南省',
  '内蒙古省',
  '甘肃省',
  '青海省',
  '宁夏省',
  '新疆省',
  '海南省',
  '西藏省',
  '香港',
  '澳门',
  '台湾',
];
const grade = [
  '初中',
  '高一',
  '高二',
  '高三',
  '大学',
];
const group = [
  "代表",
  "观察员",
  "志愿者",
  "指导老师",
  "学术团队",
  "会务团队"
];
const SelectProvince = SelectFieldMultiSelect(prov,"学校所在省份 Province");
const SelectGrade = SelectFieldMultiSelect(grade,"年级 Grade");
const SelectGroup = SelectFieldMultiSelect(group,"申请类型 Apply Type");
const TextFieldInfo = () => (
  <MuiThemeProvider>
  <div style={{width: '600', margin: 'auto', 'background-color': 'rgba(255,255,255,0.95)', 'flex': 3}}>
    <div style = {{display:'flex', justifyContent: 'space-between'}}>
      <h2 style = {{textAlign : 'left', margin: 5}}>
          代表信息填报
      </h2>
      <RaisedButton
        label = "Save"
        backgroundColor = '#2196F3'
        style = {{margin:5}}/>
    </div>
    <hr />
    <p style = {{textAlign : 'left'}}>
      请按照要求尽可能全面地填写您的个人信息，您的信息可以多次保存，直到您点击提交。
    </p>
    <TextInput
      hintText="姓名 Name"
      name = "string"
    />
   <br />
      <SelectFieldNullable />
    <TextInput
      hintText="年龄 Age"
      name = "num"
    />
    <br />
    <TextInput
      hintText="身份证（或护照）号码 ID"
      name="cid"
    /><br />
      <SelectGrade />
    <br />
    <TextInput
      hintText="在读学校 School"
    /><br />
      <SelectProvince/>
      <br />
    <hr/>
    <p style = {{textAlign : 'left'}}>
      联系方式 Contact
    </p>
      <TextInput
        hintText="Email"
      /><br />
      <TextInput
        hintText="手机 Mobile Phone"
        name="tel"
      /><br />
      <TextInput
        hintText="QQ"
        name = "num"
      /><br />
      <TextInput
        hintText="微信 Wechat"
      /><br />
      <hr/>
      <p style = {{textAlign : 'left'}}>
         Emergency Contact (注意：该项内容用于为代表购买会议期间内的保险 请如实填写)
      </p>
      <TextInput
        hintText="监护人姓名 Name of Guardian"
        name = "string"
      /><br />
      <TextInput
        hintText="监护人手机 Mobile of Guardian"
        name = "tel"
      /><br />
  </div>
  </MuiThemeProvider>
);

export default TextFieldInfo;
