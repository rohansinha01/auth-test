// components/SignUpForm.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with:", { email, password });
    // Add sign-up logic (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 border rounded-lg shadow-md">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      
      <Button text={'Submit'} link="/home"/>
   </form>
  );
};

export default SignUpForm;
