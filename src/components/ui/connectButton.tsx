'use client'
import React, { ButtonHTMLAttributes, ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import walletIcon from '../../../app/assets/wallet.svg'
import cx from "classnames";

type ConnectButtonModalProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: "red" | "green" | "blue" | "pink" | "yellow" | "violet";
    children: ReactNode;
    icon?: React.ReactNode;
  };
  const ConnectButtonModal = ({
    children,
    icon,
    color,
    ...otherProps
  }: ConnectButtonModalProps) => {
    const [clicked, setClicked] = useState(false);
  
    const handleButtonClick = () => {
      // Toggle the clicked state when the button is clicked
      setClicked(!clicked);
    };
  
    const colorStyle =
      color === "red"
        ? {
            borderRadius: "8px",
            border: "1px solid rgb(14 77 230)",
            background: clicked ? "#0A60C5" : "#0F4DE6",
            color: "#fff", // Text color when not clicked
          }
        : color === "yellow"
        ? {
            borderRadius: "30px",
            border: "6px solid #FFA500",
            background: "#FFFF00",
            color: "#000", // Text color when not clicked
          }
        : color === "violet"
        ? {
            borderRadius: "30px",
            border: "6px solid #8A2BE2",
            background: "#EE82EE",
            color: "#000", // Text color when not clicked
          }
        : color === "blue"
        ? {
            borderRadius: "30px",
            border: "6px solid #0000FF",
            background: "#6495ED",
            color: "#fff", // Text color when not clicked
          }
        : color === "green"
        ? {
            borderRadius: "30px",
            border: "6px solid #008000",
            background: "#00FF00",
            boxShadow: "0px 0px 15px 5px #008000",
            color: "#fff", // Text color when not clicked
          }
        : {
            borderRadius: "30px",
            border: "6px solid #FF69B4",
            background: "#FF1493",
            boxShadow: "none",
            color: "#fff", // Text color when not clicked
          };

          useEffect(() => {
            if (clicked) {
              // Add a timeout to reset the clicked state after 1 second
              const timeoutId = setTimeout(() => {
                setClicked(false);
              }, 100);
        
              // Clear the timeout if the component unmounts before 1 second
              return () => clearTimeout(timeoutId);
            }
          }, [clicked]);

          const clickedColorStyle =
        color === "red"
            ? {
                background: "#FF0000",
                color: "#fff", // Text color when clicked
            }
            : color === "yellow"
            ? {
                background: "#FFA500",
                color: "#fff", // Text color when clicked
            }
            : color === "violet"
            ? {
                background: "#8A2BE2",
                color: "#fff", // Text color when clicked
            }
            : color === "blue"
            ? {
                background: "#0000FF",
                color: "#fff", // Text color when clicked
            }
            : color === "green"
            ? {
                background: "#008000",
                color: "#fff", // Text color when clicked
            }
            : {
                background: "#FF69B4",
                color: "#fff", // Text color when clicked
            };

            const clickedSizeStyle = {
                transform: clicked ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease-in-out",
            };
  
    return (
        <button
        style={{
          ...colorStyle,
          ...clickedSizeStyle,
          display: "flex",
          alignItems: "center",
        }}
        className={cx(
          "py-2 px-4",
          colorStyle,
          clicked ? "hover:bg-transparent clicked" : ""
        )}
        onClick={handleButtonClick}
        {...colorStyle}
      >
        {icon && (
          <span className="mr-2">
            <Image width={25} height={25} src={walletIcon} alt="Wallet Icon" />
          </span>
        )}
        {children}
      </button>
      
    );
  };
  

export default ConnectButtonModal;
