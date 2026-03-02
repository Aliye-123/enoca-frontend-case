import "./Input.scss";

export default function Input({ id, label, type = "text", value, onChange, error }) {
  return (
    <div className={`input ${error ? "input--error" : ""}`}>
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder="E-posta adresinizi giriniz..."
      />

      {error && (
        <div id={`${id}-error`} className="input__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}