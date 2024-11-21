import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your feedback here..."
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit Feedback
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Previous Feedback:</h3>
        <ul className="space-y-2">
          {feedbackList.map((item, index) => (
            <li
              key={index}
              className="p-3 border border-gray-300 rounded bg-white shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
