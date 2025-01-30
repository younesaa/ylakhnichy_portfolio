import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  const serviceId = 'service_8a35e5u';
  const templateId = 'template_n87czj1';
  const userId = 'I876TlH3sJUdHjLaP';
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== ''; // Optional: Add email/phone validation
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      // Add your email sending logic here
      emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        userId
      ).then(
        () => {
          console.log('Email sent successfully');
          console.log({ name, email, message });
          setName('');
          setEmail('');
          setMessage('');
          setOpen(true);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project or opportunity? Let's collaborate and make your idea real!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter a valid email or phone number" : ""}
                fullWidth
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              fullWidth
            />
              <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              sx={{ marginTop: '16px' }}
            >
              Send
            </Button>
          </Box>
          <br />
          <br />
          <div className="contact-box">
              Contact Details <br />📩 Email: <a href="mailto:fffff">lakhnichy.younes@gmail.com</a> <br />📱 Phone/WhatsApp: <a href="https://wa.me/33758248862">+33 7 58 24 88 62</a>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={8000} // Closes after 8 seconds
            onClose={() => setOpen(false)}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="success"
              sx={{ width: '100%' }}
            >
              Message sent! I'll get in touch shortly.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;