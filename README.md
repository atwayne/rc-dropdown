A wrapper of rc-dropdown so we can have elements other than rc-menu inside rc-dropdown

[![NPM version][npm-image]][npm-url]


[npm-url]: https://www.npmjs.com/package/rc-dropdown-ext
[npm-image]: http://img.shields.io/npm/v/rc-dropdown-ext.svg?style=flat-square


## Install

[![rc-dropdown-ext](https://nodei.co/npm/rc-dropdown-ext.png)](https://npmjs.org/package/rc-dropdown-ext)


## Usage

For APIs, you can reference to https://github.com/react-component/dropdown/blob/master/README.md#api

The difference is that with the orginal version of `rc-dropdown` you can't use elements other than `rc-menu` as overlay. 
But now you can.


## Example
```
<DropDown
   trigger={['click']}
   overlay={<div className={style.filterOverlay}>
     <Select
       showSearch
       allowClear
       className={style.filterSelector}
       optionLabelProp='children'
       onChange={this.onSelectChange}
       optionFilterProp='children'
       filterOption={(input, option) =>
         option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
       }
       placeholder={placeholder}
     >
       {dropdownOptions.map(option =>
         option === null ? null : <Option key={option} value={option}>{option}</Option>)}
     </Select>
   </div>}
/>
```
