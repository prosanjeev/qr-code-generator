import { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCode, setQrCode]= useState('')

  const handleGenerate = () => {
    setQrCode(text)
    setText('')
   
  };

  return (
    <div>
      <input onChange={(e)=> setText(e.target.value )} type="text" placeholder="Type text" value={text}/>
      <button onClick={handleGenerate} >Generate</button>
      <div style={{ background: 'white', padding: '16px' }}>
        {qrCode && <QRCode value={qrCode} />}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
