import '../../styles/Button.css'

export const Button = ({ label, onClick } : { label: string, onClick: () => void }) => {
  return (
    <button className='button-container' onClick={onClick}>
      {label}
    </button>
  )
}