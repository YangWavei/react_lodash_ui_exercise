interface DrinkParamsType {
  name?: string
}

/** 饮品信息
 * @description
 * 每种饮品的信息是放在一起的，而没有分散到多余的条件判断里。
 * 这会让我们以后更加容易得增加更多饮品。去掉了所有的条件判断语句
 */
const drinkData = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

function Drink({ name }: DrinkParamsType) {
  const data = drinkData[name as keyof typeof drinkData];

  if (!data) {
    return <section><h1 className="text-red-500">暂无数据</h1></section>;
  }

  const { part, caffeine, age } = data
  
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div className="space-y-4">
      <Drink name="tea" />
      <hr className="my-4" />
      <Drink name="coffee" />
      <hr className="my-4" />
      <Drink />
    </div>
  );
}
