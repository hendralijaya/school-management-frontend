import React, { Component } from "react";

class InputField extends Component {
  render() {
    const { label, type, id, value, onChange } = this.props;
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
        <input type={type} id={id} className="border rounded-md shadow-sm p-2 w-full" value={value} onChange={onChange} />
      </div>
    );
  }
}

export default InputField;
