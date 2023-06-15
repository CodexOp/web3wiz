import React, { useState, useEffect, useRef } from "react";
import chatIcon from "../../assets/images/icons8-chat-bubble-30.png";
import closeIcon from "../../assets/images/icons8-multiply-30.png";
import styles from "./ChatBox.module.css";

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState(["Hi, How can I help you?"]);
  const chatContainerRef = useRef(null);

  const handleChatClose = () => {
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
    if (message.includes("@") && message.includes(".com")) {
      const newChatData = [...chatData, message];
      setChatData(newChatData);
      // console.log("make a post request",newChatData);
      makeEmailPostRequest("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZkMDYzMzA0Mzc1MjY1NTUzMDUxMzAi_pc", newChatData);

      setTimeout(() => {
        const updatedChatData = [...newChatData, "Thank you, our team will get in touch"];
        setChatData(updatedChatData);
      }, 1000);
      // makeEmailPostRequest("url", chatData)
    } else {
      const newChatData = [...chatData, message];
      setChatData(newChatData);

      setTimeout(() => {
        const updatedChatData = [...newChatData, "Please provide your email address, our team will contact you soon"];
        setChatData(updatedChatData);
      }, 1000);
    }

    setMessage("");
  };

  async function makeEmailPostRequest(url, payload) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      emaildata: payload,
    });

    let response = await fetch(url, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    console.log(data);
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
    <div className={`${styles["chat-box"]} ${isVisible && styles["visible"]}`}>
      <div className={styles.title}>
        <img src={chatIcon} alt="chat-icon" />
        <h3>Chat Support</h3>
        <img src={closeIcon} onClick={handleChatClose} alt="close-icon" />
      </div>
      <div className={styles.Textbody} ref={chatContainerRef}>
        {chatData.map((item, index) => (
          <div className={`${index === chatData.length - 1 ? styles["last-message"] : ""} ${index % 2 === 0 ? styles.TextbodyLeft : styles.TextbodyRight}`} key={index}>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputboxdiv}>
        <input type="text" value={message} onChange={handleMessageChange} placeholder="Enter your message" className={styles["chat-input"]} onKeyDown={handleKeyDown} />
        <button className={styles.sendButton} onClick={handleSendClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
