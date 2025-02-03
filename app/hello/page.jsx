'use client';

import { useState, useEffect } from "react";

export default function Page(){
    const [postId, setPostId] = useState("");

    useEffect(() => {
      fetch("/api/hello/1234")
        .then((res) => res.json())
        .then((data) => setPostId(data.postId));
    }, []);
  
    return <h1> {postId} </h1>
  
}