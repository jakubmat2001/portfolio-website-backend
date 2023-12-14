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

const handleRequestGrades = async (req, res) => {
    const { name, email, org, orgType } = req.body;
    try {
        const mailSent = await handleSendMail(name, email, org, orgType);
        res.json({ success: mailSent });
    } catch (error) {
        res.status(400).json("Failed to update");
    }
};


const handleSendMail = (name, email, org, orgType) => {
    const toEmail = "jakubmatusik11@gmail.com";
    const mailOptions = {
        from: user_mail,
        to: toEmail,
        subject: 'Email Verification',
        html: `<h4> Employer requested to see your grades: </h4></br>
        <p>Name: ${name}</p></br>
        <p>Email: ${email}</p></br>
        <p>Organisation: ${org}</p></br>
        <p>Org-Type: ${orgType}</p></br>`
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
    handleRequestGrades: handleRequestGrades
}