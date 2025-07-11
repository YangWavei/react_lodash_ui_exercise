import { Button } from 'antd';
import { sculptureList } from '../data/index';
import { useState } from 'react';

function Gallery() {
  const [index, setIndex] = useState(0)

  const [showMore, setShowMore] = useState(false)

  function handleClick() {
    setIndex(prev => prev + 1)
  }

  function handleMoreClick() {
    setShowMore(prev => !prev)
  }

  let sculpture = sculptureList[index]

  return (
    <>
      <Button onClick={handleClick}>
        Next
      </Button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <Button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </Button>
      <p>
        {showMore && <p>{sculpture.description}</p>}
      </p>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        title={sculpture.name}
      />

    </>
  )

}

export default Gallery
