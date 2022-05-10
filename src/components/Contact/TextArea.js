const TextArea = (props) => (
  <div className="text-area">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <span className="text-danger">{props.errorMessage}</span>
    {props.errorOccured === true ? (
      <textarea
        className={"input-error"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    ) : (
      <textarea
        className={props.focus || props.value !== "" ? "input-focus" : ""}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    )}
  </div>
);

export default TextArea;
