import axios from 'axios';

export async function fetchData(uri: string): Promise<any | null> {
  try {
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('HTTP Error:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error', error.message);
    }
    return null;
  }
}
