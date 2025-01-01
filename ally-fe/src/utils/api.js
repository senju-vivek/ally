export const API_BASE_URL = "http://127.0.0.1:5000";

// Function to send a message to the assistant
export const sendMessageToAI = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "rxBzuWJZH6SpmJ6VlcKqyb",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [{ type: "text", text }],
          },
        ],
        model: "gpt-4",
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      
      console.error(`Error: ${response.status} - ${response.statusText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;  
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Sorry, something went wrong.";
  }
};
