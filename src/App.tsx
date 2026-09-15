import React, { useState, useEffect } from "react";
import { Scene } from "./components/Scene";
import { SublevelStudioLandingPage } from "@designcodeio/threeui";

export function App() {
  const [view, setView] = useState<"portfolio" | "scene">(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("view") === "scene" || window.location.hash.includes("scene")) {
        return "scene";
      }
    }
    return "portfolio";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("view") === "scene" || window.location.hash.includes("scene")) {
        setView("scene");
      } else {
        setView("portfolio");
      }
    };
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        backgroundColor: "#030303",
      }}
    >
      {view === "scene" ? <Scene /> : <SublevelStudioLandingPage />}

      {/* Quick Mode Switcher pill */}
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "9999px",
          background: "rgba(10, 8, 18, 0.88)",
          border: "1px solid rgba(167, 139, 250, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
        }}
      >
        <button
          type="button"
          onClick={() => {
            const nextView = view === "portfolio" ? "scene" : "portfolio";
            setView(nextView);
            window.location.hash = nextView === "scene" ? "scene" : "";
          }}
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#c4b5fd",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          title="Toggle between Full Portfolio and Standalone Scene Component"
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#a78bfa",
              boxShadow: "0 0 8px #a78bfa",
            }}
          />
          <span>{view === "portfolio" ? "View <Scene /> Only" : "View Full Portfolio"}</span>
        </button>
      </div>
    </main>
  );
}

export default App;
