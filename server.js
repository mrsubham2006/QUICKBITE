const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Load Knowledge Base
const knowledgeBase = require('./knowledge_base.json');

// REAL SMS CONFIGURATION (SERVER SIDE - SECURE)
const SMS_API_KEY = process.env.SMS_API_KEY || 'J6kEgLdKvH8AiFVwbtXDGOrfQSUIxcpau14slzNR0ZeYPW9BhjYlvVjtEdz368fwLWMpGThFr21DbQgZ';

// AI CONFIGURATION
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/send-otp', async (req, res) => {
    const { mobile, otp } = req.body;
    // ... existing OTP logic
    if (SMS_API_KEY === 'YOUR_API_KEY' || !SMS_API_KEY) {
        return res.status(400).json({ success: false, message: "Developer Error: API Key not set" });
    }
    try {
        const response = await axios({
            method: 'post',
            url: 'https://www.fast2sms.com/dev/bulkV2',
            headers: { 'authorization': SMS_API_KEY, 'Content-Type': 'application/json' },
            data: { "route": "otp", "variables_values": otp.toString(), "numbers": mobile.toString() }
        });
        if (response.data.return) res.json({ success: true, message: "OTP Sent" });
        else res.status(500).json({ success: false, message: response.data.message });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/chat', async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.length < 10) {
        return res.json({ reply: "API Key missing in .env file." });
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
        const systemPrompt = `You are the QuickBite Support Bot.
        Knowledge Base: ${JSON.stringify(knowledgeBase)}
        Rules: Be friendly, professional, and concise. recommend restaurants and explain features. If unsure, call 7848049774.`;

        // Ultra-Aggressive Fallback Loop with your specific available models
        const versions = ["v1", "v1beta"];
        const models = ["gemini-2.0-flash", "gemini-2.5-flash", "gemini-flash-latest", "gemini-1.5-flash"];

        
        let lastError = null;

        for (const ver of versions) {
            for (const modelId of models) {
                try {
                    const url = `https://generativelanguage.googleapis.com/${ver}/models/${modelId}:generateContent?key=${apiKey}`;
                    
                    const contents = (history || []).map(h => ({
                        role: h.role === 'model' ? 'model' : 'user',
                        parts: [{ text: h.parts[0].text }]
                    }));
                    
                    contents.push({
                        role: 'user',
                        parts: [{ text: `${systemPrompt}\n\nUser: ${message}` }]
                    });

                    const response = await axios.post(url, {
                        contents: contents,
                        generationConfig: { maxOutputTokens: 800 }
                    });

                    if (response.data && response.data.candidates) {
                        const reply = response.data.candidates[0].content.parts[0].text;
                        console.log(`Success! Version: ${ver}, Model: ${modelId}`);
                        return res.json({ reply });
                    }
                } catch (err) {
                    lastError = err;
                    console.log(`Attempt Failed: ${ver}/${modelId}`);
                }
            }
        }
        
        throw lastError;
        
    } catch (error) {


        console.error("Chat AI Error:", error.response ? error.response.data : error.message);
        const detail = error.response && error.response.data && error.response.data.error ? error.response.data.error.message : error.message;
        res.status(500).json({ reply: "API Error: " + detail });
    }
});





const PORT = 3002;
app.listen(PORT, async () => {
    console.log(`\n========================================`);
    console.log(`QuickBite Backend v2.2 (Discovery Mode)`);
    console.log(`Running at http://localhost:${PORT}`);
    console.log(`========================================\n`);

    // Discovery: List available models
    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
    if (apiKey) {
        try {
            const res = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
            console.log("AVAILABLE MODELS FOR YOUR KEY:");
            res.data.models.forEach(m => console.log(`- ${m.name.replace('models/', '')}`));
        } catch (err) {
            console.error("COULD NOT LIST MODELS:", err.response ? err.response.data : err.message);
        }
    }
});



