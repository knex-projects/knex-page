import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { DefaultLayout } from './layouts/DefaultLauout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contacts />} />
      </Route>
    </Routes>
  )
}
