import './App.css'
import logo from './assets/logo.svg'
import { Modal } from './components/molecules/Modal';
import { ItemList, ListFilter } from './components/organisms'
import { useGetItems, useGetBrands, useScrollEnd } from './hooks'
import { useModal } from './hooks/useModal';

function App() {
  const { items, trigger, loading, filterTrigger } = useGetItems();
  const { brands } = useGetBrands()
  const { currentItem, setCurrentId, isOpen, setOpen } = useModal();

  useScrollEnd({ isLoading: loading, onScrollEnd: trigger });

  const handleItemClick = ({ id }:{ id: number }) => {
    setCurrentId(id)
  }

  return (
    <>
      <header className='header'>
        <img className='header-logo' src={logo} alt="Logo" />
        <h1 className='header-title'>React Technical Test</h1>
      </header>
      <main>
        <ListFilter options={brands} onFilter={filterTrigger} />
        <ItemList list={items} isLoading={loading} onItemClick={handleItemClick} />
      </main>
      <footer className='footer'>
        <p className='footer-text'>2024 Todos los derechos reservados</p>
      </footer>
      {isOpen && <Modal setOpen={setOpen} item={currentItem} />}
    </>
  )
}

export default App
