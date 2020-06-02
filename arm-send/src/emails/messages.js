const sgMail = require('@sendgrid/mail')
// const SENDGRID_API_KEY = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMessageEmail = (email, userName, userEmail, userNumber, UserMessage) =>{
    sgMail.send({
        to: email,
        from: userEmail,
        subject: userName+", "+userNumber,
        text: UserMessage,
        html: '<strong>ARM Pensions</strong>'
    })
}

module.exports = {
    sendMessageEmail
}
