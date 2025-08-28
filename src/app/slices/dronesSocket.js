import socket from "../../utils/socket"
import { setDroneData } from "./dronesSlice";

export const listenToDroneSocket = () => (dispatch) => {
    socket?.on("message", (msg) => {
        console.log("Message: ", msg);
        dispatch(setDroneData(msg));
    });
}