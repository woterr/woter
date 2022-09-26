import { checkTargetForNewValues, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./imageSlider.css";
import axios from "axios";

function ImageSlider() {
  let [postArray, setPostArray] = useState([]);
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  function getPosts() {
    axios
      .get("https://maroon-chain-stop.glitch.me/posts")
      .then((response) => {
        const posts = response.data;
        setPostArray(posts);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPosts();
    setWidth(carousel.current.offsetWidth);
  }, []);

  console.log(postArray);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {postArray.map((post, index) => {
          return (
            <motion.div className="carousel-item" key={post._id}>
              {/* <img src={post.image} alt="" /> */}
              <div style={{ backgroundImage: `url(${post.image})` }}></div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default ImageSlider;
