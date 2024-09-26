import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span>DASHBOARD</span>
      <Link to="/dashboard">Create a New Chat</Link>
      <Link to="/">Explore MISHUTA AI</Link>
      <Link to="/dashboard">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="text">
            <span>Upgrade to MISHUTA AI PRO</span>
            <span>Get unlimited acces to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
