import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transaction from "../transaction.json"
import Profile from "./components/profile"
import Statistic from "./components/statistic"
import FriendsList from "./components/friendsList"
import Transactions from "./components/transactions"
import './App.css'

function App() {

  return (
    <>
<Profile user={user}/>
<Statistic data={data} />
<FriendsList friends={friends}/>
<Transactions transaction={transaction}/>
    </>
  )
}

export default App
