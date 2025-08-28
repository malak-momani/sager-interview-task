import { io } from "socket.io-client";

const socket = io("http://localhost:9013", {
  transports: ["websocket", "polling"], 
});

export default socket;