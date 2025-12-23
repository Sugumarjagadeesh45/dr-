import { Platform } from "react-native";

// -----------------------------------------
// ✅ LOCALHOST CONFIGURATION
// -----------------------------------------

// Android Emulator uses 10.0.2.2 to access the computer's localhost
// iOS Simulator uses localhost
const LOCAL_IP = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const PORT = '5001';

// Base URL for API calls (e.g., axios)
export const API_BASE = `http://${LOCAL_IP}:${PORT}/api`;

// Base URL for Socket.io
export const SOCKET_URL = `http://${LOCAL_IP}:${PORT}`;

console.log("🚀 App configured for LOCALHOST:", API_BASE);// // Use NGROK URL for LOCALHOST MODE





// const NGROK_URL = "https://ba-lhhs.onrender.com";

// // Enable localhost mode
// const useLocalhost = false;

// // Backend URL
// export const API_BASE = useLocalhost
//   ? NGROK_URL
//   : "https://ba-lhhs.onrender.com/api";

// // Socket URL
// export const SOCKET_URL = useLocalhost
//   ? NGROK_URL
//   : "https://ba-lhhs.onrender.com";
