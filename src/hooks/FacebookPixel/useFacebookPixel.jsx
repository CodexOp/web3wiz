import ReactPixel from 'react-facebook-pixel';

const useFacebookPixel = () => {

  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
  };
  ReactPixel.init('1233452067589283', "", options);

  const sendDataToPably = (data) => {
    fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc', {
      // Enter your IP address here

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };
  
  const callFacebookPixel = (event, value) => {
    ReactPixel.trackCustom(`${event}`, {value, currency: 'USD'});
    sendDataToPably({ event, value, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000) })
  };

  return callFacebookPixel;
};

export default useFacebookPixel;
