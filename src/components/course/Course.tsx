import { FC } from "react";
import { ICourse } from "../../types/types";

interface CourseProps {
    course: ICourse
}

const Course: FC<CourseProps> = ({course}) => {
    return (
        <div className="courses__item">
            <div className="courses__image" style={{backgroundColor: `${course.bgColor}` }}>
                <img src={course.image} alt={course.name} />
            </div>
            <div className="courses__title">{course.name}</div>
        </div>
    )
}

export default Course;