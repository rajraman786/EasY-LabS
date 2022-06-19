const nodemailer = require("nodemailer");

const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        // host: process.env.EMAIL_SERVICE,
        // post: 2525,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text,
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            // console.log(err);
            throw new Error("Internal Server error");
        } else {
            // console.log(info);
        }
    });
};

module.exports = sendEmail;
