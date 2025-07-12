import { useState } from "react"
import { Button, Input } from "antd";
let nextId = 0
interface ListType {
  id: number,
  name: string
}

function List() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<ListType[]>([])
  
  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <Input
        value={name}
        className="w-[300px]"
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={() => {
        setArtists([...artists, { id: nextId++, name }])
      }}>添加</Button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

export default List;
