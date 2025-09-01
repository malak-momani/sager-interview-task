import socket from "../../utils/socket"
import { setDroneData } from "./dronesSlice";

export const listenToDroneSocket = () => (dispatch) => {
    socket?.on("message", (msg) => {
        dispatch(setDroneData(msg));
    });
}