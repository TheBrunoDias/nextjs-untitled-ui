import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div className="mx-2" {...props}></div>
}

type InputProps = ComponentProps<'input'>

function InputControl(props: InputProps) {
  return (
    <input
      className="w-full flex-1 border-0 bg-transparent p-2 text-zinc-900 placeholder-zinc-600 focus:outline-none"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="group mx-1 flex w-full items-center rounded-lg border border-zinc-300 shadow-sm focus-within:ring focus-within:ring-violet-500"
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
