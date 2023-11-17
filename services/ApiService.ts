import axios from "axios";
import type { AxiosProgressEvent } from "axios";
import useConsoleMessages from "@/composables/useConsoleMessages";
const { addMessage } = useConsoleMessages();

export async function fetchData(
  uri: string,
  onProgress?: (percentage: number) => void,
): Promise<any | null> {
  addMessage({ type: 'info', content: `Starting request to ${uri}` });

  try {
    const response = await axios.get(uri, {
      headers: { "Content-Type": "application/json" },
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        const event = progressEvent as unknown as {
          loaded: number;
          total: number;
        };
        if (event.total) {
          const percentage = Math.round((event.loaded * 100) / event.total);
          if (onProgress) {
            onProgress(percentage);
          }
          addMessage({
            type: 'info',
            content: `Download progress: ${percentage}%`,
          });
        }
      },
    });

    addMessage({
      type: 'success',
      content: `Request to ${uri} completed successfully.`,
    });
    return response.data;
  } catch (error) {
    addMessage({
      type: 'error',
      content: `Request to ${uri} failed: ${error}`,
    });
    return null;
  }
}
