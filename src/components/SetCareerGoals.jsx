import React, { useState } from "react";

const SetCareerGoals = () => {
  const [shortTermGoal, setShortTermGoal] = useState("");
  const [longTermGoal, setLongTermGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shortTermGoal || !longTermGoal) {
      alert("Please fill out both goals!");
      return;
    }
    const newGoal = {
      id: Date.now(),
      shortTerm: shortTermGoal,
      longTerm: longTermGoal,
    };
    setGoals([...goals, newGoal]);
    setShortTermGoal("");
    setLongTermGoal("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Set Your Career Goals</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="shortTerm" className="block font-medium text-gray-700">
            Short-Term Goal
          </label>
          <input
            type="text"
            id="shortTerm"
            value={shortTermGoal}
            onChange={(e) => setShortTermGoal(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="E.g., Learn React"
          />
        </div>
        <div>
          <label htmlFor="longTerm" className="block font-medium text-gray-700">
            Long-Term Goal
          </label>
          <input
            type="text"
            id="longTerm"
            value={longTermGoal}
            onChange={(e) => setLongTermGoal(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="E.g., Become a Full-Stack Developer"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Goals
        </button>
      </form>

      {goals.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Goals</h3>
          <ul className="space-y-3">
            {goals.map((goal) => (
              <li
                key={goal.id}
                className="p-3 border border-gray-300 rounded bg-white"
              >
                <p>
                  <strong>Short-Term:</strong> {goal.shortTerm}
                </p>
                <p>
                  <strong>Long-Term:</strong> {goal.longTerm}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SetCareerGoals;
