import '../styles/globals.css'
import {Provider} from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';
import NewNav from '../components/newNav';

function MyApp({ Component, pageProps }) {
  return (
  <Provider store = {store}>
    {/* <Navbar/> */}
    <NewNav/>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
