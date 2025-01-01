import axios from 'axios'
const API_BASE_URL = "http://127.0.0.1:5000"; // Ensure this is correct

export const fetchTranscriptions = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/transcribe-speech-google`);
        return response.data.transcriptions;
    } catch (err) {
        console.error("Error fetching transcriptions:", err);
        throw new Error("Failed to fetch transcriptions. Please try again.");
    }
};
