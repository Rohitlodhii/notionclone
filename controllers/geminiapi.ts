
import {GoogleGenerativeAI}  from '@google/generative-ai';

interface GenerateProps {
    call : string ,
}

export const generateContent = async ({call} : GenerateProps) => {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model : "gemini-1.5-flash"});


    const prompt = `input : [${call}]

    Generate Content Accourding to the Prompt given in the Input upside ,
    Make Sure to follow these guidelines : 

    1) the generated content must be in the form of array of object in the form of text , taking the reference given below.
    2) the array of object should contain only the types given below in the reference.
    3) its not neccesssary to use all the types given in reference at once , use those which are needed at the moment.
    
    there is a type and a content in the reference array , generated content must be in content field , and its type whether it is a heading , paragraph , link ,etc must be
    justified in the type field , don't use any other type then this 

    If the input is not clear or Invalid , if you can't generate a response return a array of object with a paragraph which says Invalid Prompt .

    On the heading type  props, use level 1 , 2 or 3 only for different size heading , sub headings
    

    Return the array of object in the form of text

    reference = [
  {
    type: "paragraph",
    content: "Welcome to this demo!",
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Blocks:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: "Paragraph",
  },
  {
    type: "heading",
    content: "Heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 1
    },
  },
  {
    type: "bulletListItem",
    content: "Bullet List Item",
  },
  {
    type: "numberedListItem",
    content: "Numbered List Item",
  },
  {
    type: "checkListItem",
    content: "Check List Item",
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Inline Content:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Styled Text",
        styles: {
          bold: true,
          italic: true,
          textColor: "red",
          backgroundColor: "blue",
        },
      },
      {
        type: "text",
        text: " ",
        styles: {},
      },
      {
        type: "link",
        content: "Link",
        href: "https://www.blocknotejs.org",
      },
    ],
  },
];



    `

    const result = await model.generateContent(prompt);

    return result


}