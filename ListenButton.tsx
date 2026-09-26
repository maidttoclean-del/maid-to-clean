import { useEffect, useRef, useState } from "react";
import { Speaker, Pause, Play } from "./icons";
import { cn } from "../utils/cn";

const SCRIPT = `Welcome to Maid to Clean! We are your trusted, licensed, bonded, and insured
house cleaning company, proudly serving Pierce, King, Snohomish, and Thurston County
in Washington. With over 25 years of experience, our fully trained team specializes
in residential cleaning, commercial cleaning, move-in and move-out cleans, new
construction cleanup, special event cleaning, Airbnb turnovers, and biohazard cleaning. Choose a weekly, bi-weekly,
or monthly plan on a three, six, or twelve month contract, and the more often we clean,
the more you save. Every home is treated with our white glove promise: meticulous,
detail-obsessed care, every single visit. Refer a friend and earn free cleanings,
and enjoy a free clean when you renew. Ready to get started? Give us a call at
2 5 3, 2 9 0, 0 3 1 2, or sign up today. We can't wait to make your home sparkle!`;

export default function ListenButton() {
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
    }
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const pickVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    // Prefer a natural-sounding English female voice if available
    return (
      voices.find((v) => /female|samantha|zira|google us english/i.test(v.name) && v.lang.startsWith("en")) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0] ||
      null
    );
  };

  const start = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(SCRIPT);
    u.rate = 0.98;
    u.pitch = 1.05;
    const v = pickVoice();
    if (v) u.voice = v;
    u.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };
    u.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };
    utterRef.current = u;
    synth.speak(u);
    setSpeaking(true);
    setPaused(false);
  };

  const handleMain = () => {
    if (!speaking) {
      start();
    } else {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      setPaused(false);
    }
  };

  const togglePause = () => {
    const synth = window.speechSynthesis;
    if (paused) {
      synth.resume();
      setPaused(false);
    } else {
      synth.pause();
      setPaused(true);
    }
  };

  if (!supported) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Pause / resume appears while speaking */}
      {speaking && (
        <button
          onClick={togglePause}
          aria-label={paused ? "Resume audio" : "Pause audio"}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-lg transition-all duration-300 hover:scale-105"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-5 w-5" />}
        </button>
      )}

      <button
        onClick={handleMain}
        aria-label={speaking ? "Stop listening" : "Listen to an overview of Maid to Clean"}
        className={cn(
          "group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-purple-500 px-4 py-3 font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
          speaking && "animate-pulse-ring"
        )}
      >
        <Speaker className={cn("h-5 w-5", speaking && "animate-bob")} />
        <span className="text-sm">{speaking ? "Stop" : "Listen"}</span>
      </button>
    </div>
  );
}
