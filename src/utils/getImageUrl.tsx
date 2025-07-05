import type { PeopleItemType } from "../types";

export function getImageUrl(person: PeopleItemType) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
