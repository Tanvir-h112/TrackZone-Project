import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

const App = ()=> {
useClock('Local Clock')
useClock(' PST Clock', 'PST')
useClock('EST Clock', 'EST')
useClock('UTC Clock', 'UTC ', 5 )


  return (
    <div>
     <ClockList />
     <LocalClock />
    </div>
  )
}

export default App;