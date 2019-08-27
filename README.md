A wrapper of rc-dropdown so we can have elements other than rc-menu inside rc-dropdown

[![rc-dropdown-ext][npm-image]][npm-url]


[npm-url]: https://www.npmjs.com/package/rc-dropdown-ext
[npm-image]: http://img.shields.io/npm/v/rc-dropdown-ext.svg?style=flat-square


## Install

[![rc-dropdown-ext](https://nodei.co/npm/rc-dropdown-ext.png)](https://npmjs.org/package/rc-dropdown-ext)


## Usage

For APIs, you can reference to https://github.com/react-component/dropdown/blob/master/README.md#api

The difference is that with the orginal version of `rc-dropdown` you can't use elements other than `rc-menu` as overlay. (You can. but there were bugs, for example every time you click on the overlay, it disappears)

But now you can.

## Demo
[![Edit rc-dropdown-ext-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/busy-bash-nn752?fontsize=14)

## Example
```
import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "rc-dropdown-ext";
import "rc-select/assets/index.css";
import Select, { Option } from "rc-select";
import FilterIcon from "@material-ui/icons/FilterList";

class App extends React.Component {
  render() {
    const options = ["U.S.A", "Sweden", "China"];

    const overlay = (
      <div>
        <Select
          showSearch
          allowClear
          optionLabelProp="children"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
          style={{
            width: "300px"
          }}
        >
          {options.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    );

    return (
      <div>
        <Dropdown trigger={["click"]} overlay={overlay}>
          <FilterIcon style={{ cursor: "pointer" }} />
        </Dropdown>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

```
