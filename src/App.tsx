import './App.css'
import logo from './assets/logo.svg'
import { ItemList, ListFilter } from './components/organisms'
import { useGetItems, useGetBrands, useScrollEnd } from './hooks'


function App() {
  const { items, trigger, loading, filterTrigger } = useGetItems();
  const { brands } = useGetBrands()

  useScrollEnd({ isLoading: loading, onScrollEnd: trigger });

  return (
    <>
      <header className='header'>
        <img className='header-logo' src={logo} alt="Logo" />
        <h1 className='header-title'>React Technical Test</h1>
      </header>
      <main>
        <ListFilter options={brands} onFilter={filterTrigger} />
        <ItemList list={items} isLoading={loading} />
      </main>
      <footer className='footer'>
        <p className='footer-text'>2024 Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
