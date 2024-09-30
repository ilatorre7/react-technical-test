import '../../styles/Aside.css'
import { IOption } from "../types"
import { InputSelect } from "../atoms/InputSelect"

export const ListFilter = ({ options, onFilter } : { options: IOption[], onFilter : (e: string) => void } ) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    onFilter(e.target.value)
  }

  return (
    <aside className='aside'>
      <h3>Filtrar por:</h3>
      <InputSelect placeholder='Selecciona una marca para filtrar' options={options} onChange={handleChange} />
    </aside>
  )
}