import Image from 'next/image'
import Mapping from './mapping';

export default function Home() {
  const a = [
    {'id':1,"name":"first","extra":"a"},
    {'id':2,"name":"second","extra":"b"},
    {'id':3,"name":"third","extra":"c"},
    {'id':4,"name":"fourth","extra":"d"},
    {'id':5,"name":"fifth","extra":"e"},
    {'id':6,"name":"sixth","extra":"f"},
    
    {'id':7,"name":"seventh","extra":"g"}
];
  return (
    <main >
      <h1>Hello</h1>
      {a.map(item=>{
                return <Mapping
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  extra={item.extra}
                />
            })}
    </main>
  )
}
