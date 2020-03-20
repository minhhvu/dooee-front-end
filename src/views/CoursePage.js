import React from "react";

//@desc Course Detail page
//@route /courses/:id
//@access private
const CoursePage = (props) => {
    const courseId = props.courseId;

    return (
      <div>Coure page #{courseId}</div>
    );
}

export default CoursePage;