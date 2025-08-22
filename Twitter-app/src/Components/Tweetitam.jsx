import { useDispatch } from "react-redux";
import { deleteTweet, updateTweet, toggleLike } from "../Features/tweetSlice";
import { useState } from "react";

export default function TweetItem({ tweet }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(tweet.content);

  return (
    <div style={{
      border: "1px solid #e1e8ed",
      borderRadius: "15px",
      padding: "12px",
      marginBottom: "15px",
      backgroundColor: "#fff"
    }}>
      <h4>@{tweet.username}</h4>

      {isEditing ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            style={{ width: "100%", padding: "8px", borderRadius: "10px", border: "1px solid #ccd6dd" }}
          />
          <button onClick={() => { dispatch(updateTweet({ ...tweet, content: text })); setIsEditing(false); }} style={{ marginTop: "5px" }}>Save</button>
        </>
      ) : (
        <p>{tweet.content}</p>
      )}

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(toggleLike(tweet.id))}>❤️ {tweet.likes}</button>
        <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit"}</button>
        <button onClick={() => dispatch(deleteTweet(tweet.id))}>Delete</button>
        <button>💬 Comment</button>
        <button>↗️ Share</button>
      </div>
    </div>
  );
}
