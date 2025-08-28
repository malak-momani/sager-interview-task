import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToDroneSocket } from "./app/slices/dronesSocket";
import socket from "./utils/socket";
import { getDrones } from "./app/slices/dronesSlice";

function App() {
  const dispatch = useDispatch();
  const droneData = useSelector((state) => state.drones);

  useEffect(() => {
    dispatch(listenToDroneSocket())
  }, [dispatch]);

  console.log('--------------', droneData?.data.features)

  return (
    <div>
    </div>
  );
}

export default App;
