import '../../styles/Button.css'

export const Button = ({ label } : { label: string }) => {
  return (
    <button className='button-container'>
      {label}
    </button>
  )
}