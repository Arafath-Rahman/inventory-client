import { useEffect, useState } from "react";

const useAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])


  return [items, setItems];
}

export default useAllItems;