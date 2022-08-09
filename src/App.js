import { useState } from 'react';
import './App.css';
import { useAddPRoductMutation, useGetGoodsQuery } from './redux';




function App() {


  const [count, setCount] = useState();
  const { data,  isLoading } = useGetGoodsQuery(count); 
  // испотльзуем кастомный хук получения данных(может принимать данные для квери параметров)


  const [newProduct, setNewProduct] = useState();
  const [addProduct, {isError }] = useAddPRoductMutation(); 
  //используем кастомный хук передачи данных(ничего не принимает)

  let handleAddProduct = async () => {
    if(newProduct){
      await addProduct({name: newProduct}).unwrap();
      setNewProduct();
    }
  }
 



  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>

      <input type='text' value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
      <button onClick={handleAddProduct}>Add product</button>

      <select onChange={e => setCount(e.target.value)}>
        <option value=''>all</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

      <ul>
        {data.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>

    </div>
  );
}
export default App;
