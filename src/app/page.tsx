'use client'
import Header from "./components/common/header/page";
import { useState } from "react";

const Home = () => {
  const [isSearchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen">
      <Header setKeyword={setSearchTerm}/>
    </main>
  );
}

export default Home