import React from 'react'
import styled from '@emotion/styled'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import { receiveProducts } from './redux/actions'
import { useDispatch } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import useProducts from './hooks/useProducts'

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 250px);
`

function App() {
  // fetch products, then update inventory state in store
  const { products, isLoading } = useProducts()
  const dispatch = useDispatch()
  dispatch(receiveProducts(products))

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Spinner>
          <HashLoader size={150} color="#36d2b3" />
        </Spinner>
      ) : (
        <MainContent />
      )}
    </div>
  )
}

export default App
