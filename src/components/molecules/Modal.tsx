import { IItem } from "../types"
import '../../styles/Modal.css'
import { formatPrice } from "../../utils"
import cross from '../../assets/x.svg';

export const Modal = ({ item, setOpen } : { setOpen: React.Dispatch<React.SetStateAction<boolean>>, item: IItem | undefined }) => {

  return (
    <>
      <div className='background' onClick={() => setOpen(false)}>
      </div>
      <div className='modal-container'>
        <div className='modal-content'>
          <img className="modal-close" src={cross} alt='Close modal' onClick={() => setOpen(false)} />
          <img className='modal-image' src={item?.image} alt={item?.title}/>
          <div className='modal-info'>
            <h1>{item?.title}</h1>
            <h3>{item?.detail.year}</h3>
            <p className='modal-description'>{item?.description}</p>
            <ul className='modal-list'>
              <li>Marca: {item?.detail.brand}</li>
              <li>Colorway: {item?.detail.colorway}</li>
            </ul>
            <h2 className='modal-price'>{formatPrice(item?.detail.price || '')}</h2>
          </div>
        </div>
      </div>
    </>
  )
}