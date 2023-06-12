import React, { useState, useEffect } from "react";
import chatIcon from "../../assets/images/icons8-chat-bubble-30.png";
import closeIcon from "../../assets/images/icons8-multiply-30.png";
import styles from "./ChatBox.module.css";

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  let [chatData, setchatData] = useState(["Hi, How can I help you?"]);

  const handleChatClose = () => {
    // handle close button
    setIsVisible(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.length > 0) {
      e.preventDefault();
      handleSendClick();
    }
  };

  const handleSendClick = () => {
    // Implement your send functionality here
    if (message.includes("@") && message.includes(".com")) {
      console.log("make a post request");
      chatData.push(message);

      setTimeout(() => {
        setchatData((prevchatData) => [...prevchatData, "Thank you our Team get in Touch"]);
      }, 500);
      // makeEmailPostRequest("url", chatData)
    } else {
      chatData.push(message);

      setTimeout(() => {
        setchatData((prevchatData) => [...prevchatData, "Please provide your email address our team will contact you soon"]);
      }, 500);
    }
    setMessage("");
  };

  async function makeEmailPostRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      // Handle the response data as needed
      console.log(responseData);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Set the scroll position to the bottom
    var container = document.getElementsByClassName(styles.Textbody)[0];
    container.scrollTop = container.scrollHeight;

    return () => {
      clearTimeout(timer);
    };
  }, [chatData]);

  return (
    <div className={`${styles["chat-box"]} ${isVisible ? styles["visible"] : ""}`}>
      <div className={styles.title}>
        <img src={chatIcon} alt="ig-icon" />
        <h3>Chat Support </h3>
        <img src={closeIcon} onClick={handleChatClose} alt="ig-icon" />
      </div>
      <div className={styles.Textbody}>
        {chatData.map((item, index) => (
          <div className={`${index === chatData.length - 1 ? styles["last-message"] : ""} ${index % 2 === 0 ? styles.TextbodyLeft : styles.TextbodyRight}`} key={index}>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputboxdiv}>
        <input type="text" value={message} onChange={handleMessageChange} placeholder="Enter your message" className={styles["chat-input"]} onKeyDown={handleKeyDown} />
        <button className={styles.sendButton} onClick={handleSendClick} onKeyDown={handleKeyDown}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
