import React, { useState } from "react";

const copyIcon = <i className='far fa-copy'></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    copyToClipBoard(e);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const copyToClipBoard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };
  return (
    <li className='colorName' style={{ background: rgb }}>
      <span onClick={(e) => handleCopy(e)}>
        {copied ? "Copied" : hex} {copyIcon}
      </span>
    </li>
  );
}

export default ListItem;
