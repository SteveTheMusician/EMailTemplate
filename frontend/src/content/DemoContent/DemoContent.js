import './DemoContent.css'
import { useState } from 'react';

function DemoContent() {
  const [toEmail, setToEmail] = useState("");

  async function sendMail() {
    if (!toEmail) return alert("Bitte E-Mail-Adresse eingeben");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: toEmail }),
    });

    const data = await res.json();
    console.log(data);
    alert(data.success ? "Mail gesendet!" : "Fehler beim Senden");
  }

    return (
        <div className="demoContent">
            <input type="text" className="inputMail" value={toEmail} onChange={(e) => setToEmail(e.target.value)} placeholder="Zur welcher Adresse?"></input>
            <button className="buttonSend" onClick={sendMail}>E-Mail senden</button>
      </div>
    )
}

export default DemoContent
