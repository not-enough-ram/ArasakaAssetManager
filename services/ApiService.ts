/* import axios from 'axios';

export async function fetchData(
  uri: string,
  onProgress: (percentage: number) => void
): Promise<any | null> {
  try {
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json' },
      // Add an onDownloadProgress event handler
      onDownloadProgress: (progressEvent: ProgressEvent) => {
        if (progressEvent.lengthComputable) {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentage); // Call the progress callback with the percentage
        }
      },
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
 */

// fetchData.ts
import axios from 'axios';

export async function fetchData(
  uri: string,
  onProgress: (percentage: number) => void,
  test: boolean = false // New parameter to indicate test mode
): Promise<any | null> {
  if (test) {
    // Simulate a request in test mode
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        onProgress(Math.min(progress, 100));
        if (progress >= 100) {
          clearInterval(interval);
          resolve({ data: 'Test data' }); // Resolve with test data
        }
      }, 100); // Adjust the interval for faster or slower simulation
    });
  } else {
    // Real request logic
    try {
      const response = await axios.get(uri, {
        headers: { 'Content-Type': 'application/json' },
        onDownloadProgress: (progressEvent: ProgressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentage);
        },
      });
      return response.data;
    } catch (error) {}
  }
}
