// app/_layout.jsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerMode: "none", // Ensures header is disabled
        headerShown: false, // Hides header explicitly
        contentStyle: { backgroundColor: "#19112A" },
        animation: "fade",
      }}
    >
      {/* If needed, define individual screens here */}
    </Stack>
  );
}
