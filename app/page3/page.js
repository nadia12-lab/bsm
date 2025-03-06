"use client";
import { useData } from "@/context/DataContext";

export default function Page3() {
  const { selectedNumbers, userName } = useData() || { selectedNumbers: [], userName: {} }; // ✅ Provide default values
  const sum = selectedNumbers.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <h1>Results</h1>
      <p>Selected Numbers:{selectedNumbers.join(" + ")} = {sum}</p>
      <p>Name: {userName?.first || "shannel"} {userName?.last || "nadine"}</p> {/* ✅ Use optional chaining */}
      <button onClick={() => (window.location.href = "/page1")}>Restart</button>
    </div>
  );
}
