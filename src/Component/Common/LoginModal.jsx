import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import Creditscore from '../../assets/login.png';
import logo from '../../assets/logo.svg';
import Swal from 'sweetalert2';

const LoginModal = ({ handleClose2 }) => {

    //login states
    const [phoneno, setPhoneno] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otploader, setOtploader] = useState(false)
    const [resendDisabled, setResendDisabled] = useState(false);
    const [timer, setTimer] = useState(60);

    const SendLoginOtp = async (e) => {
        try {
            e.preventDefault();
            setOtploader(true)

            // API call would go here
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "phone": phoneno })
            };
            await fetch('http://localhost:8000/send-otp', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'OTP Sent',
                            text: 'Your OTP has been sent successfully.',
                            confirmButtonColor: '#DA3731'
                        });
                        setOtpSent(true);
                        setResendDisabled(true);
                        setTimer(60);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data.message,
                            confirmButtonColor: '#DA3731'
                        });
                    }
                })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send OTP. Please try again later.',
                confirmButtonColor: '#DA3731'
            });
        } finally {
            setOtploader(false)
        }
    }

    const LoginOtpSubmit = async (e) => {
        try {
            e.preventDefault();
            setOtploader(true)

            // API call would go here
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "phone": phoneno, "otp": otp })
            };
            await fetch('http://localhost:8000/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            text: 'You are now logged in.',
                            confirmButtonColor: '#DA3731'
                        }).then(() => {
                            // Store the token in sessionStorage
                            sessionStorage.setItem("token", JSON.stringify(data.token));
                            
                            // Close the modal
                            handleClose2();
                            
                            // Refresh the page after successful login
                            window.location.reload();
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data.message,
                            confirmButtonColor: '#DA3731'
                        });
                    }
                })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                confirmButtonColor: '#DA3731'
            });
        } finally {
            setPhoneno("");
            setOtp("");
            setOtpSent(false);
            setResendDisabled(false)
            setOtploader(false)
        }
    }

    const allowOnlyNumbers = (e) => {
        const input = e.target.value;
        const regex = /^[0-9]*$/;
        if (!regex.test(input)) {
            e.target.value = input.replace(/[^0-9]/g, '');
        }
    }

    return (
        <div className="LoginPopup">
            <Row>

                <Col lg={6}>
                    <div className='mobile-otp-abcds'>
                        <h3>Welcome Back ! <br/>please enter your mobile number</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Enter Mobile Number</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder="Enter Mobile Number"
                                    defaultValue={phoneno}
                                    onChange={(e) => setPhoneno(e.target.value)}
                                    onInput={allowOnlyNumbers}
                                    maxLength="10"
                                />
                            </div>
                            {otpSent &&
                                <div className="form-group">
                                    <label htmlFor="email">Enter OTP</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder="Enter OTP"
                                        defaultValue={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                            }
                        </form>
                        {otploader ? <div className='text-center'>Please Wait...</div>
                            :
                            !otploader && !otpSent ?
                                (
                                    <button className='submit12' style={{marginTop:'0px'}} onClick={SendLoginOtp} disabled={resendDisabled} >{resendDisabled ? `Resend OTP in ${timer}s` : "Login With OTP"}</button>
                                ) : otpSent ?
                                    (
                                        <button className='submit12' style={{marginTop:'0px'}} onClick={LoginOtpSubmit}>Submit</button>
                                    ) : ""

                        }
                    </div>
                </Col>
                <Col lg={6}>
                    <div style={{ background: 'white' }}>
                        <img className='w-100' src={Creditscore} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LoginModal