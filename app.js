const spamKeywords = [
    "suspicious activity",
    "verify your information",
    "won a lottery",
    "get rich quick",
    "work from home",
    "earn thousands",
    "click the link",
    "no experience required", 
    "certificate Program",
    "mentorship Projects"
];

const emails = [
    {
        content: "Dear User,\n\nWe noticed suspicious activity on your account. To keep your account secure, please verify your information by clicking the link below:\n\n[Verify Now](http://suspicious-link.com)\n\nFailure to verify within 24 hours will result in account suspension.\n\nThank you,\nYour Bank Support Team",
        status: "Spam"
    },
    {
        content: "Dear Lucky Winner,\n\nYou have been randomly selected as the winner of the 2024 International Lottery! Your prize of $1,000,000 is waiting for you.\n\nTo claim your prize, please send us your personal information, including your bank details.\n\nBest Regards,\nThe Lottery Team",
        status: "Spam"
    },
    {
        content: "Hi there,\n\nYou can earn thousands of dollars from the comfort of your home! Join our investment program and watch your money grow overnight!\n\nClick here to get started: [Get Started Now](http://suspicious-link.com)\n\nDon’t miss this opportunity!\n\nSincerely,\nThe Wealth Coach",
        status: "Spam"
    },
    {
        content: "Hello,\n\nWe’re excited to offer you a job that allows you to work from home! Earn up to $5,000 per week without any prior experience.\n\nTo start your application, click the link below:\n\n[Apply Now](http://suspicious-link.com)\n\nBest,\nHR Team",
        status: "Spam"
    },
    {
        content: "Hi John,\n\nI hope you’re doing well! I wanted to follow up on our last conversation about the marketing strategy.\n\nBest,\nEmily",
        status: "Safe to Send"
    },
    {
        content: "Dear Team,\n\nJust a reminder about the meeting scheduled for next Tuesday at 10 AM. Looking forward to seeing everyone there.\n\nBest,\nManager",
        status: "Safe to Send"
    },
    {
        content: "Hello,\n\nWe are pleased to announce our new product line launching next month. Stay tuned for updates!\n\nCheers,\nThe Marketing Team",
        status: "Safe to Send"
    },
    {
        content: "Hi Sarah,\n\nAttached is the report we discussed. Let me know if you have any questions.\n\nThanks,\nMark",
        status: "Safe to Send"
    }
];

function checkEmailStatus() {
    const emailContent = document.getElementById('emailContent').value.trim();

    // Check if textarea is empty
    if (emailContent === "") {
        document.getElementById('result').innerText = "Please enter a valid email.";
        document.getElementById('result').className = ""; // Remove any existing class
        return;
    }

    // Check for spam keywords
    let isSpam = spamKeywords.some(keyword => emailContent.toLowerCase().includes(keyword));

    // Display result
    const resultMessage = isSpam ? "SPAM!!!!!!" : "Safe to Send";
    document.getElementById('result').innerText = `Spam Check Result: ${resultMessage}`;
    
    // Add warning class if spam
    document.getElementById('result').className = isSpam ? "spam-warning" : "spam-safe"; 
}

// Add event listener to button
document.getElementById('check-button').addEventListener('click', checkEmailStatus);
