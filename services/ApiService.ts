import axios from 'axios';

export async function fetchData(
  uri: string,
  onProgress: (percentage: number) => void
): Promise<any | null> {
  try {
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json' },
      onDownloadProgress: (progressEvent: ProgressEvent) => {
        const event = progressEvent as unknown as {
          loaded: number;
          total: number;
        };
        if (event.total) {
          const percentage = Math.round((event.loaded * 100) / event.total);
          onProgress(percentage);
        }
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}
