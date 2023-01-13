import { forwardRef, useEffect, useRef } from 'react'

export default forwardRef(function TextInput(
  {
    type = 'text',
    id,
    name,
    defaultValue,
    variant = 'primary',
    placeholder,
    isError,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
  },
  ref,
) {
  const input = ref ? ref : useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, [])

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
          isError && 'input-error'
        } input-${variant} ${className}`}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
    </div>
  )
})
