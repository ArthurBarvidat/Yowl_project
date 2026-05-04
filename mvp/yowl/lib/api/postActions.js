export async function likePost(id) {
  const res = await fetch(`/api/posts/${id}/like`, {
    method: "POST",
  });
  return res.json();
}

export async function repostPost(id) {
  const res = await fetch(`/api/posts/${id}/repost`, {
    method: "POST",
  });
  return res.json();
}

export async function commentPost(id) {
  const res = await fetch(`/api/posts/${id}/comment`, {
    method: "POST",
  });
  return res.json();
}
