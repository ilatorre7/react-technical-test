import '../../styles/Aside.css'
import { IOption } from '../types'

export const InputSelect = ({ 
  placeholder,
  options, 
  onChange 
} : { 
  placeholder: string
  options : IOption[],
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void 
}) => {

  return (
    <select className="card-filter" name="filter" onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.label} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}