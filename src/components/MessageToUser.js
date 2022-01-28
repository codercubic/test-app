import React from "react";

export default function MessageToUser({ userData, weatherData }) {
  console.log(userData, weatherData);
  return (
    <div>
      You are {userData?.name} ({userData?.age} years old) and are living at{" "}
      {weatherData?.location}. According your age, you should have sleept for a
      total of {weatherData?.avg_sleep}. The weather at your location is{" "}
      {weatherData?.weather}.
    </div>
  );
}
