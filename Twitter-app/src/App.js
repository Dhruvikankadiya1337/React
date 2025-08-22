import SidebarLeft from "./Components/SidebarLeft";
import SidebarRight from "./Components/SidebarRight";
import TweetForm from "./Components/TweetForm";
import TweetList from "./Components/TweetList";

export default function App() {
  return (
    <div style={{
      display: "flex",
      maxWidth: "1200px",
      margin: "auto",
      backgroundColor: "#e6ecf0",
      minHeight: "100vh"
    }}>
      <SidebarLeft />
      <div style={{ flex: 1, padding: "20px" }}>
        <TweetForm />
        <TweetList />
      </div>
    <SidebarRight />
    </div>
  );
}
