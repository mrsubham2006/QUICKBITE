const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

// REAL SMS CONFIGURATION (SERVER SIDE - SECURE)
const SMS_API_KEY = 'J6kEgLdKvH8AiFVwbtXDGOrfQSUIxcpau14slzNR0ZeYPW9BhjYlvVjtEdz368fwLWMpGThFr21DbQgZ';

app.post('/send-otp', async (req, res) => {
    const { mobile, otp } = req.body;

    if (SMS_API_KEY === 'YOUR_API_KEY' || !SMS_API_KEY) {
        return res.status(400).json({ 
            success: false, 
            message: "Developer Error: API Key not set in server.js" 
        });
    }

    try {
        console.log(`Attempting to send OTP: ${otp} to ${mobile}...`);
        const response = await axios({
            method: 'post',
            url: 'https://www.fast2sms.com/dev/bulkV2',
            headers: {
                'authorization': SMS_API_KEY,
                'Content-Type': 'application/json'
            },
            data: {
                "route": "otp",
                "variables_values": otp.toString(),
                "numbers": mobile.toString()
            }
        });

        console.log("Gateway Response:", response.data);

        if (response.data.return) {
            res.json({ success: true, message: "OTP Sent Successfully" });
        } else {
            console.error("SMS Gateway Error Details:", response.data);
            res.status(500).json({ success: false, message: response.data.message || "SMS Gateway Error" });
        }
    } catch (error) {
        if (error.response) {
            console.error("SMS Provider Error:", error.response.data);
            res.status(500).json({ success: false, message: error.response.data.message || "Provider Error" });
        } else {
            console.error("Back-end Connection Error:", error.message);
            res.status(500).json({ success: false, error: error.message });
        }
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`SMS Bridge running at http://localhost:${PORT}`));
