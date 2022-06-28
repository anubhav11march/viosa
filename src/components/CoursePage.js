import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import placeholder2 from "../icons/placeholder2.png";
import rightscroll from "../icons/rightscroll.png";
import clock from "../icons/clock.png";
import courseplaceholder from "../icons/courseplaceholder.png";

const CoursePage = () => {
  const [course, setCourse] = useState([]);
  const id = useParams();
  console.log(id);
  const FetchTWork = async () => {
    const response = await axios.get(
      `https://viosa.herokuapp.com/course/getCoursebyId/${id?.id}`
    );
    setCourse(response?.data?.data);
  };

  useEffect(() => {
    FetchTWork();
  }, []);
  console.log(course);
  return (
    <div className="coursepage">
      <div className="courseheader">
        <div className="shortinfo">
          <h1>{course?.name}</h1>
          <p>
          {course?.description}
          </p>
          <strong>{course?.courseContents}</strong>
          <div className="time">
            <img src={clock}></img>
            <p>120 minutes</p>
          </div>
        </div>
        <div className="pay">
          <h3>One time pay only</h3>
          <s>Rs. {course?.prevPrice}</s>
          <strong>Rs. {course?.newPrice}</strong>
          <button>Buy Now</button>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="coursecontent">
        <img src={courseplaceholder}></img>
        <h2>About the course</h2>
        <p>
          {course?.about}
        </p>
      </div>
    </div>
  );
};

export default CoursePage;
