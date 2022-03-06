import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './test'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
