export async function getComments(productId = 9, limit = 5) {
  const path = `/products/${productId}/comments?`;
  const query = `limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app${path}${query}`
  );
  if (!response.ok) {
    throw new Error("댓글을 불러오는데 실패했습니다");
  }
  const result = await response.json();
  return result;
}
