import styles from "./QRCode.module.css";

const QRCode = () => {
  return (
    <div className={styles.qrWrapper}>
      <img
        src="https://i.imgur.com/7O4GpSm.jpg"
        alt="VippsQRKode"
        width="256"
        height="256"
        className={styles.qr}
      />
      <div className="font-bold m-1 text-xl mb-2">Scan QR for Vipps (Vippsnr. 605726)</div>
    </div>
  );
};

export default QRCode;
