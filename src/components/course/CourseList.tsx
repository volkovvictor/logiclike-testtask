import { FC } from 'react';
import { ICourse } from '../../types/types';
import Course from './Course';
import './course.scss';

interface CoursesListProps {
    courses: ICourse[]
}

const CourseList: FC<CoursesListProps>= ({courses}) => {
    return (
        <div className="courses">
            {courses.map(course => <Course course={course}/>)}
        </div>
    )
}

export default CourseList;