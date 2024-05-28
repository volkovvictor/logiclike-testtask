import { useEffect, FC } from 'react';
import './sidebar.scss';


interface SidebarProps {
    activeTopic: string,
    changeActiveTopic: (value: string) => void
}

const Sidebar: FC<SidebarProps> = ({activeTopic, changeActiveTopic}) => {

    const topicsList = [
        "Все темы",
        "Логика и мышление",
        "Загадки",
        "Головоломки",
        "Путешествия",
    ];

    useEffect(() => {
        changeActiveTopic(topicsList[0])
    }, [])

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {topicsList.map((topic, index) => {
                    const activeClass = activeTopic === topic ? " active" : "";
                    return (
                        <li 
                            onClick={() => changeActiveTopic(topic)} 
                            className={`sidebar__item${activeClass}`} 
                            key={index}>
                                {topic}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;