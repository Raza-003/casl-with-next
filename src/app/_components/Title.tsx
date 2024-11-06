"use client";

import { Can } from "@casl/react";
import { AppAbility } from "./Abilities";
import { useAbility } from "./AbilityContext";

interface PostProps {
  title: string;
  content: string;
}

export default function PostTitle({ post }: { post: PostProps }) {
  const ability = useAbility();

  return (
    <div>
      <h1>{post.title}</h1>
      <Can I="read" a="Post" ability={ability as AppAbility}>
        <p>{post.content}</p>
      </Can>
      <Can I="update" a="Post" ability={ability as AppAbility}>
        <button>Edit Post</button>
      </Can>
    </div>
  );
}
