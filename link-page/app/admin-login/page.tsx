"use client";

import { FormEvent, useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError(response.status === 503 ? "Login belum dikonfigurasi di Vercel." : "Password salah. Coba lagi.");
        setBusy(false);
        return;
      }
      window.location.href = "/admin";
    } catch {
      setError("Koneksi bermasalah. Coba lagi.");
      setBusy(false);
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "radial-gradient(ellipse at top, #063b65, #020711 65%, #000)", color: "#f8fbff", fontFamily: "Inter, Arial, sans-serif" }}>
      <form onSubmit={submit} style={{ width: "min(100%, 380px)", padding: 28, border: "1px solid #00aaff88", borderRadius: 22, background: "#020b17eF", boxShadow: "0 0 40px #008fff22" }}>
        <div style={{ color: "#00c8ff", fontSize: 11, fontWeight: 800, letterSpacing: 3, marginBottom: 10 }}>FALINTINO STUDIO</div>
        <h1 style={{ margin: "0 0 8px", fontSize: 26 }}>Admin Bio</h1>
        <p style={{ margin: "0 0 22px", color: "#a8bbd0", fontSize: 13 }}>Masukkan password admin untuk melanjutkan.</p>
        <label htmlFor="password" style={{ display: "block", fontSize: 13, marginBottom: 8 }}>Password</label>
        <input id="password" type="password" autoComplete="current-password" autoFocus required value={password} onChange={e => setPassword(e.target.value)} placeholder="Password admin" style={{ width: "100%", padding: "13px 14px", borderRadius: 12, border: "1px solid #168bd0", background: "#050f1e", color: "white", outline: "none", marginBottom: 14 }} />
        {error && <p role="alert" style={{ color: "#ff8c9b", fontSize: 13 }}>{error}</p>}
        <button disabled={busy} type="submit" style={{ width: "100%", padding: 13, border: 0, borderRadius: 12, background: "#00aaff", color: "#00111f", fontWeight: 800, cursor: "pointer" }}>{busy ? "Memeriksa..." : "Masuk"}</button>
      </form>
    </main>
  );
}
