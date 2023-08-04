import "./App.css";

import users from "./users.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

import "./App.css";


 export default function App() {
  return (
    <div>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}


