import React, { useState } from "react";

const Home = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  return (
    <div>
      <div className="title">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
