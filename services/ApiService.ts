export async function fetchData(uri: string): Promise<any | null> {
  try {
    const response = await fetch(uri, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.log("HTTP Error:", response.status);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return;
  }
}
