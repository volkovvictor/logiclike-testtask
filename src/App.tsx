import { useState, useEffect } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import CourseList from './components/course/CourseList';
import './styles/App.scss';
import { ICourse } from './types/types';

function App() {

  const [activeTopic, setActiveTopic] = useState<string>("");
  const [courses, setCourses] = useState<ICourse[]>([]);

  const getCourses = async () => {
    const response = await fetch("https://logiclike.com/docs/courses.json");
    
    if (!response.ok) throw new Error('Ошибка запроса');

    const data = await response.json();

    return data;
  }

  const changeActiveTopic = (value: string) => {
    setActiveTopic(value)
  }

  const filteringTopics: () => ICourse[] = () => {
    const currentTopic = activeTopic === "Путешествия" ? "Страны и столицы" : activeTopic; // В api отличается название тэга от названия в меню, не понял это ошибка в дизайне, в api или просто проверка, для этого добавил проверку (добавил коммент в жире - перевёл задачу на аналитика =D )
    return courses.filter(course => course.tags.filter(tag => tag === currentTopic).length);
  }

  const filteredTopics = filteringTopics();

  useEffect(() => 
    {
      getCourses().then(data => setCourses(data));
    }, []);

  return (
    <div className="App">
      <Sidebar activeTopic={activeTopic} changeActiveTopic={changeActiveTopic}/>
      <CourseList courses={activeTopic === "Все темы" ? courses : filteredTopics}/>
    </div>
  );
}

export default App;
