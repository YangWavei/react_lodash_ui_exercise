import { getImageUrl } from "../utils/getImageUrl";

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* section组件往后的内容都重复了 */}
      <Profile imageId={'szV5sdG'} name={'Maria Skłodowska-Curie'} profession={'physicist and chemist'}
        discovery={'polonium (chemical element)'}
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]} />

      {/* 自定义Profile组件 使用对象传参的方式 */}
      <MyProfile
        person={{
          name: '张三',
          profession: '计算机科学与技术',
          imageId: 'YfeOqp2',
          discovery: 'a method for measuring carbon dioxide in seawater',
          awards: [
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
          ],
        }
        }
        imageSize={100}
      />
    </div>
  );
}


interface ProfileParamsType {
  imageId: string,
  name: string,
  profession: string,
  awards: string[],
  discovery: string,
  imageSize?: number
}


function Profile({ imageId, name, profession, awards, discovery, imageSize = 70 }: ProfileParamsType) {
  return (<section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b> Awards: {awards.length} </b>
        ({awards.join(',')})
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  </section>)
}


interface MyProfileParamsType {
  person: Pick<ProfileParamsType, 'name' | 'profession' | 'awards' | 'discovery' | 'imageId'>
  imageSize?: number
}

function MyProfile({ person, imageSize = 70 }: MyProfileParamsType) {
  const { name, profession, awards, discovery, imageId } = person
  return <>
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards:{awards.length} </b>
          ({awards.join(',')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  </>
}

export default Gallery
