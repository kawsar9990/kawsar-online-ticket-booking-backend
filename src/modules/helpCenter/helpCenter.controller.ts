import type { Request, Response } from "express";
import { createHelpCenterService } from "./helpCenter.service.js";


export const createHelpCenterHandler = async (req: Request, res: Response) =>{
try{
const { name, email, phone, subject, message } = req.body;

if(!name || !email || !subject || !message){
return res.status(400).json({
  success: false,
  message: "Please provide all required fields (name, email, subject, message)",
});
}

const result = await createHelpCenterService({
  name,
  email,
  phone,
  subject,
  message,
});

return res.status(201).json({
  success: true,
  message: "Help center message submitted successfully!",
  data: result,
});

}
catch(error: any){
return res.status(500).json({
 success: false,
 message: "Internal Server Error",
 error: error.message,   
})
}
}