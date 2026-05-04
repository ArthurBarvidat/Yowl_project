export async function getPosts() {
  const res = await fetch("/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export async function createPost(data) {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur création post");
  }

  return res.json();
}

export async function likePost(id) {
  const res = await fetch(`/api/posts/${id}/like`, {
    method: "POST",
  });

  if (!res.ok) {
    console.error("Like failed");
    return null;
  }

  return res.json();
}

export async function commentPost(id) {
  const res = await fetch(`/api/posts/${id}/comment`, {
    method: "POST",
  });

  if (!res.ok) {
    console.error("Comment failed");
    return null;
  }

  return res.json();
}

export async function repostPost(id) {
  const res = await fetch(`/api/posts/${id}/repost`, {
    method: "POST",
  });

  if (!res.ok) {
    console.error("Repost failed");
    return null;
  }

  return res.json();
}
