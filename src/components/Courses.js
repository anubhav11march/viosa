import { useState, useEffect } from "react";
import axios from "axios";
import text5 from "../icons/text5.png";
import smallcloud from "../icons/smallcloud.png";
import bigcloud from "../icons/bigcloud.png";
import vector7 from "../icons/vector7.png";
import placeholder2 from "../icons/placeholder2.png";

import { useNavigate } from "react-router-dom";
const Courses = () => {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  const FetchTWork = async () => {
    const response = await axios.get(
      `https://viosa.herokuapp.com/course/getCourses`
    );
    setCourse(response?.data?.data);
  };

  useEffect(() => {
    FetchTWork();
  }, []);
  console.log(course);

  return (
    <div className="courses">
      <div className="header">
        <img className="text" src={text5}></img>
        <img className="smallcloud" src={smallcloud}></img>
        <img className="bigcloud" src={bigcloud}></img>
        <img className="vector7" src={vector7}></img>
      </div>
      <div className="courselist">
        {course?.map((data) => {
          return (
            <div className="course">
              <img src={placeholder2}></img>
              <div className="title">
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/course/details/${data._id}`)}
                >
                  {data.name}
                </h3>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/course/details/${data._id}`)}
                >
                  {data.courseContents}
                </p>
              </div>
              <div className="buy">
                <s>Rs. {data.prevPrice}</s>
                <strong>Rs. {data.newPrice}</strong>
                <button className="buynow">Buy Now</button>
                <button>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
