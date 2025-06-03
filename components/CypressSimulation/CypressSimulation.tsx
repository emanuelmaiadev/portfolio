import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaSmile, FaFrown } from "react-icons/fa";
import confetti from "canvas-confetti";

// List of technologies to simulate loading
const techs = [
  "HTML",
  "CSS",
  "Tailwind",
  "React",
  "TypeScript",
  "NodeJS",
  "Insomnia",
  "Cypress",
];

// Fallback questions to simulate resistance
const fallbackQuestions = [
  "Why?",
  "Are you sure?",
  "I'd rethink that decision!",
  "Come on! This was hard to do!",
  "You're gonna fail the test...",
];

const CypressSimulation = () => {
  const [testStep, setTestStep] = useState(0);
  const [techStep, setTechStep] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const [fallbackStep, setFallbackStep] = useState(0);
  const [reconsidered, setReconsidered] = useState(false);

  // Simulate test steps one by one
  useEffect(() => {
    if (result === null && testStep < 3) {
      const timeout = setTimeout(() => setTestStep((prev) => prev + 1), 1200);
      return () => clearTimeout(timeout);
    }
  }, [testStep, result]);

  // Simulate loading each technology after test steps complete
  useEffect(() => {
    if (testStep >= 3 && result === null && techStep < techs.length) {
      const timeout = setTimeout(() => setTechStep((prev) => prev + 1), 400);
      return () => clearTimeout(timeout);
    }
  }, [techStep, testStep, result]);

  // Trigger glitch mode if user refuses all fallback attempts
  useEffect(() => {
    if (result === false && fallbackStep >= fallbackQuestions.length) {
      document.body.classList.add("glitch-mode");
    }
    return () => {
      document.body.classList.remove("glitch-mode");
    };
  }, [result, fallbackStep]);

  // Launch confetti animation on positive response
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // Handle first Yes/No decision
  const handleInitialAnswer = (answer: boolean) => {
    if (answer) {
      setResult(true);
      triggerConfetti();
    } else {
      setResult(false);
      setFallbackStep(0);
    }
  };

  // Handle fallback decision loop
  const handleFallbackAnswer = (answer: boolean) => {
    if (answer) {
      setResult(true);
      setReconsidered(true);
      triggerConfetti();
      document.body.classList.remove("glitch-mode");
    } else {
      setFallbackStep((prev) => prev + 1);
    }
  };

  return (
    <div>
      {/* Glitch effect styles */}
      <style>
        {`
          @keyframes glitch-bg {
            0% { background-position: 0 0; }
            25% { background-position: 5px 5px; }
            50% { background-position: -5px 5px; }
            75% { background-position: 5px -5px; }
            100% { background-position: 0 0; }
          }

          @keyframes glitch-text {
            0% { transform: skew(0deg); }
            20% { transform: skew(-5deg); }
            40% { transform: skew(5deg); }
            60% { transform: skew(-5deg); }
            80% { transform: skew(5deg); }
            100% { transform: skew(0deg); }
          }

          .glitch-mode {
            animation: glitch-bg 0.3s infinite;
            background: repeating-linear-gradient(
              45deg,
              #000,
              #000 5px,
              #0f0f0f 5px,
              #0f0f0f 10px
            ) !important;
            color: #ff00ff !important;
            font-family: monospace !important;
          }

          .glitch-mode * {
            animation: glitch-text 0.2s infinite !important;
          }
        `}
      </style>

      <div className="bg-[#0f0f0f] text-green-400 font-mono text-xs md:text-sm rounded-md border border-green-600 w-full max-w-md min-h-[460px] overflow-hidden shadow-md m-auto">
        {/* Cypress test file header */}
        <div className="bg-[#2f2f2f] text-white px-3 py-1 flex items-center justify-between">
          <div className="text-sm">portfolio.cy.js</div>
          <div className="flex gap-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Test log section */}
        <div className="p-4 space-y-1">
          <div className="text-green-500">&gt; Running: portfolio.cy.js</div>
          <div>
            <span className="text-green-500">✓</span> Visit homepage
          </div>
          {testStep > 0 && (
            <div>
              <span className="text-green-500">✓</span> Locate About section
            </div>
          )}
          {testStep > 1 && (
            <div>
              <span className="text-green-500">✓</span> Validate skills listed
            </div>
          )}

          {/* Technology loading steps */}
          {testStep > 2 && result === null && (
            <div className="mt-4">
              {techs.slice(0, techStep).map((tech, index) => (
                <div key={index}>
                  <span className="text-green-500">✓</span> Loading {tech}
                </div>
              ))}

              {techStep >= techs.length && (
                <div className="text-white mt-4">
                  Would you hire me?
                  <div className="mt-2 space-x-3">
                    <button
                      onClick={() => handleInitialAnswer(true)}
                      className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-white"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleInitialAnswer(false)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-white"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Fallback question loop */}
          {result === false && fallbackStep < fallbackQuestions.length && (
            <div className="mt-4 text-red-400 space-y-2">
              <div>{fallbackQuestions[fallbackStep]}</div>
              <div className="space-x-3">
                <button
                  onClick={() => handleFallbackAnswer(true)}
                  className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-white"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleFallbackAnswer(false)}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-white"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* Final result rendering */}
          {result && (
            <div className="mt-4 font-bold flex items-center gap-2 text-green-500">
              <FaCheck />
              {reconsidered
                ? "Wow... you scared me! Thanks for reconsidering!"
                : "Test Passed"}
              <FaSmile className="ml-1" />
            </div>
          )}

          {result === false && fallbackStep >= fallbackQuestions.length && (
            <div className="mt-4 font-bold flex items-center gap-2 text-red-500">
              <FaTimes />
              Test Failed
              <FaFrown className="ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CypressSimulation;
