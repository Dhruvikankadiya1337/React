import { useSelector } from "react-redux";
import TweetItem from "../Components/Tweetitam";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets);

  return (
    <div>
      {tweets.length === 0 ? <p>No tweets yet</p> : tweets.map(t => <TweetItem key={t.id} tweet={t} />)}
    </div>
  );
}
