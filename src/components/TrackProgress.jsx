import React, { useState } from "react";

const TrackProgress = () => {
  const [progressList, setProgressList] = useState([]);
  const [goal, setGoal] = useState("");
  const [progress, setProgress] = useState(0);

  const handleAddProgress = (e) => {
    e.preventDefault();
    if (!goal || progress < 0 || progress > 100) {
      swal("Please enter a valid goal and progress percentage (0-100).");
      return;
    }

    const newProgress = {
      id: Date.now(),
      goal,
      progress,
    };

    setProgressList([...progressList, newProgress]);
    setGoal("");
    setProgress(0);
  };

  return (
    <div className="bg-gray-100 w-full p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Track Your Progress</h2>
      <form onSubmit={handleAddProgress} className="space-y-4">
        <div>
          <label htmlFor="goal" className="block font-medium text-gray-700">
            Career Goal
          </label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="E.g., Learn React"
          />
        </div>
        <div>
          <label htmlFor="progress" className="block font-medium text-gray-700">
            Progress (%)
          </label>
          <input
            type="number"
            id="progress"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter a value between 0-100"
            min="0"
            max="100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Progress
        </button>
      </form>

      {progressList.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
          <ul className="space-y-4">
            {progressList.map((item) => (
              <li key={item.id} className="p-3 border border-gray-300 rounded bg-white">
                <p>
                  <strong>Goal:</strong> {item.goal}
                </p>
                <p className="mt-2 flex items-center">
                  <strong>Progress:</strong> 
                  <span className="ml-2 w-full bg-gray-200 h-4 rounded relative">
                    <span
                      className="bg-blue-500 h-4 rounded absolute"
                      style={{ width: `${item.progress}%` }}
                    ></span>
                  </span>
                  <span className="ml-3">{item.progress}%</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackProgress;
