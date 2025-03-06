"use client";
import { useData } from "@/context/DataContext";
import { useRouter } from "next/navigation";

export default function page1() {
  const { selectedNumbers, setSelectedNumbers } = useData();
  const router = useRouter();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelect = (num) => {
    if (selectedNumbers.length < 2) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  return (
    <div>
      <h1>Select 2 numbers</h1>
      {numbers.map((num) => (
        <button key={num} onClick={() => handleSelect(num)} disabled={selectedNumbers.includes(num)}>
          {num}
        </button>
      ))}
      {selectedNumbers.length === 2 && <button onClick={() => router.push("/page2")}>Next</button>}
    </div>
  );
}
