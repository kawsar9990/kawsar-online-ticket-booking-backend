import helpcenterdata from "../../model/helpcenterdata.js";


export interface IHelpCenterInput{
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};


export const createHelpCenterService = async (payload: IHelpCenterInput) => {
  const result = await helpcenterdata.create(payload);
  return result;
};