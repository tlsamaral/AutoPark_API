"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodemailer = require('nodemailer'); var _nodemailer2 = _interopRequireDefault(_nodemailer);
require('dotenv').config();

const transporter = _nodemailer2.default.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (name, email, pass) => {
  try {
    const mailOption = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Auto Park - Your Registration Details 🚀',
      html: `<p>
                <strong>Dear ${name},</strong>
            </p>
            <p>
                <em>Welcome to Auto Park!</em> We are excited to have you on board.
            </p>
            <p>
                You have been <strong>successfully registered</strong> as a user in our system. Below are your registration details:
            </p>
            <ul>
                <li><strong>Username:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Password:</strong> ${pass}</li>
            </ul>
            <p>
                <em>Please note that for security reasons, we recommend <strong>changing your password</strong> upon your first login.</em>
            </p>
            <p>
                To access the Auto Park system and start managing your actions, please click on the link below:
            </p>
            <p>
                <a href="[Link to Access System]">Link to Access System</a>
            </p>
            <p>
                If you have any questions or need assistance, feel free to contact us at <a href="mailto:[Contact Email]">[Contact Email]</a>.
            </p>
            <p>
                Thank you for choosing Auto Park.
            </p>
            <p>
                <em>Best regards,</em><br>
                <strong>The Auto Park Team</strong>
            </p>`,
    };
    await transporter.sendMail(mailOption);
    return 'Email sent successfully.';
  } catch (err) {
    console.log(err);
    return 'Unable to send email with user information';
  }
};

exports. default = sendEmail;
