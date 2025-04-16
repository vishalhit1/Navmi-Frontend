import React, { useState } from 'react';
// Make sure you have Bootstrap CSS imported in your project:
// Either via import 'bootstrap/dist/css/bootstrap.min.css'; in your index.js
// Or via a CDN link in your index.html

const Blogs = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [success, setSuccess] = useState(false);

  const sendOtp = async () => {
    if (!mobile || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!otp) {
      setError('Please enter an OTP');
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      // Setup the request parameters
      const apiUrl = "http://www.alots.in/sms-panel/api/http/index.php";
      const message = `Your OTP for Navmi Finserrv is ${otp}. Please enter this code to verify your account. Do not share this code with anyone.`;
      
      const params = new URLSearchParams({
        username: "NAVMI",
        apikey: "3EA60-47082",
        apirequest: "Text",
        sender: "navmif",
        mobile: mobile,
        message: message,
        route: "OTP",
        TemplateID: "1707174366125237400",
        format: "JSON"
      });

      // In a real application, you would need to use a backend service or proxy
      // to make this request to avoid CORS issues
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=l8heqlhijg45abs63qs85st545");
      
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      
      try {
        const fullUrl = `${apiUrl}?${params.toString()}`;
        const response = await fetch(fullUrl, requestOptions);
        const result = await response.text();
        setResponse(result);
        setSuccess(true);
      } catch (fetchError) {
        console.error("API call failed:", fetchError);
        setError("Failed to connect to SMS API. This is likely due to CORS restrictions in the browser.");
        
        // For demonstration purposes - show what would be sent
        console.log(`Would send to: ${apiUrl}?${params.toString()}`);
      }
      
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError(`Failed to send OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card container mx-auto mt-4" style={{ maxWidth: '500px' }}>
      <div className="card-body">
        <h2 className="card-title mb-4">Send OTP SMS</h2>
        
        <div className="mb-3">
          <label htmlFor="mobileInput" className="form-label">Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            id="mobileInput"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="otpInput" className="form-label">OTP:</label>
          <input
            type="text"
            className="form-control"
            id="otpInput"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP to send"
            maxLength={6}
          />
        </div>
        
        <button
          onClick={sendOtp}
          disabled={loading}
          className="btn btn-primary w-100"
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : 'Send OTP'}
        </button>
        
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        
        {success && (
          <div className="alert alert-success mt-3" role="alert">
            OTP sent successfully!
          </div>
        )}
        
        {response && (
          <div className="mt-3">
            <h5>API Response:</h5>
            <div className="bg-light p-3 rounded">
              <pre className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                {response}
              </pre>
            </div>
          </div>
        )}
        
        <div className="mt-4 alert alert-info">
          <p className="mb-0"><strong>Note:</strong> To make this component work in production, you'll need to set up a backend service or proxy to handle the API request to the SMS service.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;