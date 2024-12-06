import React, { useState, useEffect } from 'react';
import bgImgUrl from "../assets/bubble.png"
import {Tooltip} from 'react-tooltip';

const PokemonContainer = ({pngImageUrl, qrCodeUrl, qrPosition ,soundCallBack, description }) => {
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch QR Code from backend
    const fetchQRCode = async () => {
      try {
        const response = await fetch(qrCodeUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch QR code');
        }
        const blob = await response.blob();
        const qrCodeObjectUrl = URL.createObjectURL(blob);
        setQrCode(qrCodeObjectUrl);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQRCode();

    // Clean up the Object URL when the component unmounts
    return () => {
      if (qrCode) {
        URL.revokeObjectURL(qrCode);
      }
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>

        <div 
            data-tooltip-id="my-tooltip"
            data-tooltip-content={description}
            data-tooltip-place="top"
            onClick={soundCallBack}
            style={{
                position: 'relative',
                width: '600px', 
                height: '600px',
                border: "1px solid #69a2ff",
                borderRadius: "50%",
                
            }}
            >
            <img 
                style={{
                    position:"absolute",
                    width:"inherit",
                    height:"inherit",
                    opacity: "40%"
                }}
                src={bgImgUrl}
                alt="bubble"
            />
            {/* Pokemon PNG Image */}
            <img
                src={pngImageUrl}
                alt="Background"
                style={{ width: 'inherit', height: 'inherit', objectFit: 'fill' }}
            />
            {qrCode && (
                <img
                    className={qrPosition==="magikarp"?'mk-class':(qrPosition==="gyrados"?"gy-class":"lt-class")}
                    src={qrCode}
                    alt="QR Code"
                    style={{
                        width: '300px', // Adjust size of QR code
                        height: '300px',
                }}
                
                />
            )}
            
        </div>
        <Tooltip id="my-tooltip" multiline={true} />
    </>
    
  );
};

export default PokemonContainer;