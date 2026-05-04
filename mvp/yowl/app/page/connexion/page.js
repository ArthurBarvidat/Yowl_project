"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const Verif_EMAIL = "chris.rnyy@gmail.com";
  const Verif_PASSWORD = "chat03";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === Verif_EMAIL && password === Verif_PASSWORD) {
      setError("");
      alert("Connexion réussie.");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90">
      
      <div className="relative">
        <div className=" rounded-10xl bg-black/90  " />

        
        <div className="w-80 rounded-xl bg-black p-6 border-3 border-[#2F195F]">

          <h1 className="mb-6 text-center text-2xl font-semibold text-white">
            Connexion
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm text-white  text-center">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez l'email ..."
                className="w-full rounded-lg border border-[#2F195F] px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white text-center">
                Mot de passe:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entre votre mot de passe ..."
                className="w-full rounded-lg border border-[#2F195F] px-3 py-2 text-white "
              />
            </div>

            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2F195F] py-2 text-white transition hover:bg-[#7353BA]"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
      