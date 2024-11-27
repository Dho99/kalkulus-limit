import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

import dotenv from "dotenv";
dotenv.config();

interface PageProps {
  expression: string;
}

const getAIResponse = async (args: string): Promise<string|unknown|any> => { //eslint-disable-line
  try {
    const apiKey: string|any = process.env.NEXT_PUBLIC_GEMINI_API_KEY; //eslint-disable-line
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`${args}`);

    return (<div dangerouslySetInnerHTML={{ __html: result.response.text() }} />)
  } catch (e: unknown) {
    console.log(e);
  }
};

export default function GenerateText({ expression }: PageProps) {
  const response = getAIResponse(
    `Berikan penjelasan mengenai ekspresi ini ${expression}, dan berikan respons dalam bentuk elemen html`
  );
  return (response);
}
