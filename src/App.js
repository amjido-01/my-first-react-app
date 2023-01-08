import './App.css';
import Data from './components/Data';
import { PropsExample } from './components/PropsExample';
import Clock from './components/Clock';
import { useEffect, useState } from 'react';
import SecondData from './components/SecondData';
// import Card from './components/Card';


const useTime = () => {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => clearInterval(id)
  }, []);
  return time;
}

function App() {
  const time = useTime();
  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
  ]

  return (
    <div className="App">
     {/* <Card /> */}

      {/* display data component */}
     <Data />
     < PropsExample name='@alajido_01' 
        person = {{
          firstName: 'Abubakar',
          age: 23,
          color: 'green'
        }} 
      />

      {/* clock component */}
      <Clock time={ time.toLocaleTimeString() } />

        <SecondData 
          userId = {posts[0].userId}
          id = {posts[0].id} 
          title = {posts[0].title} 
          body = {posts[0].body} 
        />
        
        <SecondData 
          userId = {posts[1].userId}
          id = {posts[1].id} 
          title = {posts[1].title} 
          body = {posts[1].body} 
        />
        
        <SecondData 
          userId = {posts[2].userId}
          id = {posts[2].id} 
          title = {posts[2].title} 
          body = {posts[2].body} 
        />
        

    </div>
  );
}



export default App;