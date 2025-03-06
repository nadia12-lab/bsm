"use client";  // Needed for stateful components

import { useData } from "../context/DataContext";

export default function Home() {
  const { selectedNumbers, setSelectedNumbers } = useData();

  return (
    <div>
      <h1>Welcome BSM!</h1>
    </div>
  );
}

