import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./Video";

function App() {
  // Create a piece of STATE to store videos
  const [videos, setVideos] = useState([]);

  // HOOK = When the app component loads -- run the following code
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ video, channel, description, song, likes, messages, shares }) => (
            <Video
              video={video}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
