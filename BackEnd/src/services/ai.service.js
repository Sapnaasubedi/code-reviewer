const GoogleGenAI = require("@google/genai");

const ai = new GoogleGenAI( process.env.GOOGLE_GEMINI_KEY);
const model = ai.getModel({model: "gemini-2.0-flash"});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    
    return  result.response.text();
    
}

module.exports = generateContent;