import { delay } from "@utils/index";

export async function getChatList() {
  const chatList = [
    {
      id: 1,
      name: "Eshant sonune",
      time: "12/12/23",
      metaText: "Hello i am Eshant",
      ismuted: true,
      isblocked: false,
      isread: true,
    },
    {
      id: 2,
      name: "Mammi",
      time: "14/12/23",
      metaText: "j1 kela ka!!",
      ismuted: true,
      isblocked: false,
      isread: false,
    },
    {
      id: 3,
      name: "Harsh Bhosale",
      time: "01/12/23",
      metaText: "bhai kaha hai",
      ismuted: true,
      isblocked: false,
      isread: true,
    },
    {
      id: 4,
      name: "Rohit",
      time: "02/01/23",
      metaText: "dont talkkk",
      ismuted: true,
      isblocked: true,
      isread: true,
    },
    {
      id: 5,
      name: "Rohit",
      time: "02/01/23",
      metaText: "dont talkkk",
      ismuted: true,
      isblocked: true,
      isread: true,
    },
    {
      id: 6,
      name: "Rohit",
      time: "02/01/23",
      metaText: "dont talkkk",
      ismuted: true,
      isblocked: true,
      isread: true,
    },
  ];

  return delay(5000).then(()=>{
    return chatList;
  });
}