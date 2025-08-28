import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToDroneSocket } from "./app/slices/dronesSocket";
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch();
  const droneData = useSelector((state) => state.drones);

  useEffect(() => {
    dispatch(listenToDroneSocket())
  }, [dispatch]);

  console.log('--------------', droneData?.data.features)

  return (
    <>
      <Main />
    </>
  );
}

export default App;
