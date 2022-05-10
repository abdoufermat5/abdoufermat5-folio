const TextInput = (props) => (
  <div className="text-input">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <span className="text-danger">{props.errorMessage}</span>
    {props.errorOccured === true ? (
      <input
        className={"input-error"}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required="required"
      />
    ) : (
      <input
        className={props.focus || props.value !== "" ? "input-focus" : ""}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required="required"
      />
    )}
  </div>
);

export default TextInput;
