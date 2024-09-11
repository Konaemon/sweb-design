'use client'
import { useState } from "react";
import Header from "./components/common/header/page";

const Home = () => {
  const [isSearchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen">
      <Header setKeyword={setSearchTerm}/>
    </main>
  );
}

export default Home