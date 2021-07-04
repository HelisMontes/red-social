import { useFetch } from './hook/useFetch';
import {Cards} from './components/Cards'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const {data } =  useFetch('post');

   const listData = data?.data ? data.data : []

  return (
    <div className="container">
      <Cards listData = {listData}/>
    </div>
  );
}

export default App;
