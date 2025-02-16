export interface InputProps {
  value?: string | number
  onChange?: (value: string) => void
  className?: string
  classNameInput?: string
  label?: string
  disabled?: boolean
  type?: "IN" | "OUT"
  id?: string | number
  target?: number
  formatter?: (value: string) => boolean
}

export interface InputProps {
  value?: string
  onChange?: (value: string) => void
  label?: string
  disabled?: true | false
}
