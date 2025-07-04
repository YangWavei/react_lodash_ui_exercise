interface PeopleItemType {
  id: number,
  name: string,
  profession: string,
  accomplishment: string,
  imageId: string,
}

export function getImageUrl(person: PeopleItemType) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
