import React from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string
  errorText?: string
  message?: string
}

const Input = ({ labelText, errorText, message, ...props }: Props) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="relative block w-full rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          {...props}
          className="peer border-none w-full bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder={labelText}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-2/3 bg-white py-0.5 px-1 text-sm text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600">
          {labelText}
        </span>
      </label>
      {message && (
        <p className="text-xs text-gray-500 font-semibold">
          <span className="text-blue-500 font-bold">* </span>
          {message}
        </p>
      )}
      {errorText && <p className="text-xs text-red-500">{errorText}</p>}
    </div>
  )
}

export default Input
