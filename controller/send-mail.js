const nodemailer = require("nodemailer");
require('dotenv').config();

const user_pass = "wsab hfua tbdn fxvc"
const user_mail = "facerecnewai@gmail.com"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user_mail,
        pass: user_pass
    }
});

const handleMessage = async (req, res) => {
    const { email, message } = req.body;
    try {
        const mailSent = await handleSendMail( email, message);
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({ success: mailSent });
    } catch (error) {
        res.status(400).json("Failed to update");
    }
};

const handleSendMail = (email, message) => {
    const toEmail = "jakubmatusik11@gmail.com";
    const mailOptions = {
        from: user_mail,
        to: toEmail,
        subject: 'Email Verification',
        html: `<h4> Employer sent you a message: </h4></br>
        <p>Email: ${email}</p></br></br>
        <p>Message: ${message}</p>`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error from nodemailer:", error);
                reject(error);
            } else {
                console.log('Verification email sent: ' + info.response);
                resolve(true);
            }
        });
    });
};

module.exports = {
    handleMessage: handleMessage
}