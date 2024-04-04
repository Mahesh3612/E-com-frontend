import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Profile } from './component/profile';
import { AddProduct } from './component/addProduct';
import { Login } from './component/login';
import { Nav } from './component/nav';
import { Privatecomponent } from './component/privateComponent';
import { ProductList } from './component/productlist';
import { Signup } from './component/signUp';
import { Update } from './component/update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
<Routes>
<Route element={<Privatecomponent/>}>
  <Route path='/' element={<ProductList/>}/>
  <Route path='/add' element={<AddProduct/>}/>
  <Route path='/profile/:id' element={<Profile/>}/>
  <Route path='/update/:id' element={<Update/>}/>
  <Route path='/logout' element={<Signup/>}/>
  </Route>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>} />
</Routes>
  </BrowserRouter>
    </div>
  
  );
}

export default App;
