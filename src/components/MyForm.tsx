import { useImmer } from "use-immer";

function MyForm() {
  // 更新一个嵌套对象
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.name = e.target.value
    })
  }
  /** 更新title */
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value
    })
  }

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value
    })
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    // 更改嵌套对象中的内容，需要通过深拷贝完全断开与原对象的引用关系
    // 设置为新的数据
    updatePerson(draft => {
      draft.artwork.image = e.target.value
    })
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  )

}

export default MyForm;
