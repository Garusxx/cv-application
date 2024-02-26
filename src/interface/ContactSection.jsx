import Section from "./Section";

import { useState } from "react";
import { Border } from "../UI/UIelements";
import LuminousBorder from "../UI/LuminousBorder";
import Glitch from "../UI/Glitch";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Act like a young guy who wants to find a job as a JavaScript developer, you have skills such as Ract Node.j CSS three.js. Your name is Rafal Zakrzewski, your phone number is +44 7954 825582, your e-mail address: rafal.gaarus@gmail.com, hobby, sci-fi movies from the 90s, favorite band, Gorilaaz, you are available from Monday to Thursday at any time.",
};

const ContactSection = () => {
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      message:
        "Hello, my name is Rafal Zakrzewski! If you want to contact me, just ask.",
      sentTime: "just now",
      sender: "Rafał Zakrzewski",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);

    await processMessageChatGPT(newMessages);
  };

  async function processMessageChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <Section>
      <LuminousBorder>
        <div>
          <Glitch
            text={"Contact me :"}
            largeFontSize={"2.5rem"}
            midFontSize={"1.5rem"}
            smallFontSize={"1rem"}
          />
        </div>
        <div style={{ position: "relative", height: "600px", width: "700px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Rafal Zakrzewski is typing..." />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </LuminousBorder>
    </Section>
  );
};

export default ContactSection;
