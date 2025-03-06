"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/context/DataContext";

export default function Page2() {
  const { setUserName } = useData();
  const router = useRouter();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit = () => {
    setUserName({ first, last });
    router.push("/page3");
  };

  return (
    <div>
      <h1>Set Username</h1>
      <input type="text" placeholder="First Name" onChange={(e) => setFirst(e.target.value)} />
      <input type="text" placeholder="Last Name" onChange={(e) => setLast(e.target.value)} />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}
