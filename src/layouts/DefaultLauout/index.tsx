import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
