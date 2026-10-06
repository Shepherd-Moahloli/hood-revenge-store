import {useEffect, useRef, useState} from 'react';

export default function SignupPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const restore = () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
    dialog.addEventListener('close', restore);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.removeEventListener('close', restore);
      dialog.close();
      restore();
    };
  }, []);

  return <dialog ref={dialogRef} className="signup-popup" aria-labelledby="signup-title" aria-describedby="signup-description">
    <button type="button" className="signup-close" aria-label="Close signup popup" autoFocus onClick={() => dialogRef.current?.close()}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.5"/></svg>
    </button>
    <h2 id="signup-title">BE THE FIRST TO KNOW.</h2>
    <p id="signup-description">SIGN UP BELOW FOR EARLY ACCESS TO OUR DROPS.</p>
    <form onSubmit={event => {event.preventDefault(); setMessage('Signups are coming soon. Your email has not been saved or sent.');}}>
      <label className="sr-only" htmlFor="signup-email">Email address</label>
      <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="Email address" required aria-describedby="signup-preview"/>
      <button className="signup-continue" type="submit">CONTINUE</button>
    </form>
    <p id="signup-preview" className="signup-note">Preview — mailing-list signups are not live yet. No email addresses are collected.</p>
    <p className="signup-status" role="status">{message}</p>
    <div className="signup-brand" aria-label="Hood Revenge">HOOD<br/>REVENGE</div>
  </dialog>;
}
