import { useState } from "react"
import { Button, Input } from "antd";


let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );
  
  function handleClick(insertAt: number) {
    // 向数组中插入一条数据
    const newArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name }, //新的元素
      ...artists.slice(insertAt) //插入点之后的元素
    ]
    setArtists(newArtists)
  }

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={() => handleClick(2)} danger>
        插入
      </Button>
      <ul>
        {artists.map(artist => (
          <li className="text-red-300 text-4xl" key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

export default List;
