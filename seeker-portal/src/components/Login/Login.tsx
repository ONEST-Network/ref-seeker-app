import OtpInput from "react-otp-input";
import { useRef, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/themes'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import './Login.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from "react-international-phone";
import { useNavigate } from "react-router-dom";

interface Timer {
    maxtime: number;
}

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};
const Login: React.FC<any> = () => {
    const timer: Timer = { maxtime: 20 };
    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    const [show, setShow] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [otpFrm, setOtpFrm] = useState(false);
    const [otp, setOtp] = useState("");
    const [timerStr, setTimerStr] = useState("");
    const [mobile, setMobile] = useState("");
    const isOtpValid = otp.length === 4;
    const isValid = isPhoneValid(mobile);
    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleOtpClose = () => {
        setOtpFrm(false);
        clearInterval(timeoutId.current);
        handleShow();
    };
    const handleOtpShow = () => {
        startTimer();
        setOtpFrm(true);
    };

    const handleShow = () => {
        setOpen2(false);
        setShow(true);
        setMobile("");
    }

    const startTimer = () => {
        console.log("Im here");
        setOtp("")
        timeoutId.current = setInterval(() => {
            setTimerStr(new Date(timer.maxtime * 1000).toISOString().substring(14, 19));
            timer.maxtime = timer.maxtime - 1;
            if (timer.maxtime <= 0) {
                clearInterval(timeoutId.current);
                timeoutId.current = null;
                setTimerStr("");
            }
        }, 1000);
    }

    return (
        <>
            <div className="mobile-container" style={{ display: show ? 'block' : 'none' }}>
                <div className="">
                    <div className="loginform">
                        <button onClick={() => navigate('/')} style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}><ArrowBackIosIcon></ArrowBackIosIcon>
                        </button>
                        <div>
                            <h3>Login</h3>
                            <p>Mobile Number</p>
                        </div>
                        <div className="loginform-fm">
                            <PhoneInput
                                defaultCountry="in"
                                value={mobile}
                                onChange={(mobile) => setMobile(mobile)}
                            />
                            {/* <input type="text" className="mobile-input" id="mobile" placeholder="Mobile number" value={mobile} onChange={(v) => setMobile(v.target.value)} maxLength={12} required /> */}
                            <br></br>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" size="large" color="primary" disabled={!isValid} onClick={() => {
                                    if (mobile) {
                                        handleClose();
                                        handleOtpShow();
                                    }
                                }}>Login</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="otp-container" style={{ display: otpFrm ? 'block' : 'none' }}>
                <div className="">
                    <div className="">
                        <button onClick={handleOtpClose} style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}><ArrowBackIosIcon></ArrowBackIosIcon> </button>
                        <div className="login-box">
                            <div className="login-bx-1">
                                <div className="input-box">
                                    <OtpInput
                                        value={otp}
                                        onChange={(v) => setOtp(v)}
                                        numInputs={4}
                                        renderSeparator={<span style={{ width: "8px" }}></span>}
                                        renderInput={(props) => <input {...props} />}
                                        inputStyle={{
                                            border: ".1px solid grey",
                                            borderRadius: "8px",
                                            width: "54px",
                                            height: "54px",
                                            fontSize: "12px",
                                            color: "#000",
                                            fontWeight: "400",
                                            caretColor: "blue"
                                        }} />
                                </div>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" size="large" color="primary" disabled={!isOtpValid}>Verify</Button>
                                </ThemeProvider>
                                <p className="timerHere">{timerStr}</p>
                            </div>
                            <div className="login-bx-2">
                                {timerStr && <p>The OTP was sent to {mobile}</p>}
                                {timerStr === "" && <div className="resendOtp"><Button variant="text" onClick={startTimer}>Resend OTP</Button></div>}
                                {/* <p className="resendOtp"><button onClick={changeMobile} className="btn" style={{ marginTop: "0.7rem" }}>Change the phone number</button></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Login;
