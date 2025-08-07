const express=require("express")
const nodemailer= require("nodemailer")
const cors=require("cors")
const app=express()
require('dotenv').config()
app.use(express.json())


app.use(cors({origin: 'https://pawanportfolio-plum.vercel.app/',
    methods: ['GET', 'POST'],
  credentials: true
}
))
const port=process.env.PORT;


// hi
app.get("/",(req,res)=>{
    res.send("welcome it is working")
})

app.post("/send-email",async(req,res)=>{
    const{name,email,subject,message}=req.body;
    console.log('reqbody', req.body)

   const transpoter= nodemailer.createTransport({

        service: 'gmail',
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }

   
    })

        const mailOptions = {
  from: email, // User's email
  to: process.env.USER, // Your email
  subject: `📨 Portfolio Contact: ${subject}`,
  text: `
You received a message from your Portfolio Website!

👤 Name: ${name}
📧 Email: ${email}
📝 Message: 
${message}
  `
};
  try {
    await transpoter.sendMail(mailOptions)
    
    res.status(200).json({message:'email sent Successfully'})
    
    
  } catch (err) {
    console.error(err)
    res.status(500).json({message:'Error in sending Email'})
    
  }


})

app.listen(port,()=>{
    console.log(`server is listing on port ${process.env.PORT}`)

})