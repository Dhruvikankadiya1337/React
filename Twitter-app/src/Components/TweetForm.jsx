import { useDispatch } from "react-redux";
import { addTweet } from "../Features/tweetSlice";
import { useState } from "react";

export default function TweetForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTweet({ id: Date.now(), username: "TechWorld", content: text, likes: 0 }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <textarea
        value={text}
        placeholder="What's happening?"
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "15px",
          border: "1px solid #ccd6dd",
          resize: "none"
        }}
        rows={3}
      />
      <button type="submit" style={{
        marginTop: "10px",
        padding: "8px 16px",
        backgroundColor: "#1DA1F2",
        color: "#fff",
        border: "none",
        borderRadius: "20px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>Tweet</button>
    </form>
  );
}
