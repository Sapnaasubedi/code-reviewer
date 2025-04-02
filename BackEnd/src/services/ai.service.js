const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" , systemInstruction: `You are on Code Reviewr Tool, who have expertise in developement and tou look for the code and fine the problems and not tjust the solution for the developers.`});

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent
