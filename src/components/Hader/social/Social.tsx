import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "../Header.module.css";
import React from 'react';

function Social() {
  return (
    <div className="logo">
      <span><InstagramIcon /></span>
      <span><WhatsAppIcon /></span>
    </div>
  );
}

export default Social;
