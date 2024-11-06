// pages/index.tsx
import React from "react";
import PostTitle from "../_components/Title";

export default function HOme() {
  const post = { title: "CASL Demo Post", content: "This is a post content" };

  return (
    <div>
      <h1>Home Page</h1>
      <PostTitle post={post} />
    </div>
  );
}
