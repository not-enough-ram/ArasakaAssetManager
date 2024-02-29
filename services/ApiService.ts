import axios from "axios";
import type { AxiosProgressEvent } from "axios";
import useConsoleMessages from "@/composables/useConsoleMessages";
import type { GameSession } from '~/interface/Types';

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

export async function sendGameSession(
  uri: string,
  gameSession: GameSession,
  onProgress?: (percentage: number) => void
): Promise<any | null> {
  addMessage({ type: 'info', content: `Starting to send game session to ${uri}` });

  try {
    const formData = new FormData();
    Object.keys(gameSession).forEach(key => {
      const value = gameSession[key];
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        // For nested objects, ensure backend can parse JSON
        formData.append(key, JSON.stringify(value)); 
      }
    });

    const response = await axios.post(uri, formData, {
      headers: {
        // 'Content-Type': 'multipart/form-data' will be automatically set by the browser
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        if (onProgress) {
          onProgress(percentage);
        }
        addMessage({
          type: 'info',
          content: `Upload progress: ${percentage}%`,
        });
      }
    });

    addMessage({
      type: 'success',
      content: `Game session sent to ${uri} successfully.`,
    });
    return response.data; // Return the response data from the server
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    addMessage({
      type: 'error',
      content: `Failed to send game session to ${uri}: ${errorMessage}`,
    });
    return null; // Return null or error information as needed
  }
}
