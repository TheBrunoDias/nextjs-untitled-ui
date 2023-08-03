'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type InputFileRootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onFileDelete(file: File): void
}
const FileInputContext = createContext({} as FileInputContextType)

export function InputFileRoot(props: InputFileRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  function onFileDelete(file: File) {
    setFiles((state) => state.filter((f) => f.name !== file.name))
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onFileDelete }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
