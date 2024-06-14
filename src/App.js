import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Posts from './Pages/Posts';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import ErrorPage from './Pages/ErrorPage';
import MainLayout from './Pages/MainLayout';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
      <div className='App'>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route  index element={<Home/>} />
                <Route  path='/about' element={<About/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/products' >
                  <Route index={true} element={<Products/>} ></Route>
                  <Route path=':productId' element={<SingleProduct/>}></Route>
                </Route>
                <Route path='*' element={<ErrorPage/>} />
            </Route>
        </Routes>
      </div>
  );
}

export default App;
