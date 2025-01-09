import React, { useState } from "react";

const DietChartPage = () => {
  const [dietCharts, setDietCharts] = useState([]);
  const [newDietChart, setNewDietChart] = useState({
    patientName: "",
    morning: { ingredients: "", instructions: "" },
    evening: { ingredients: "", instructions: "" },
    night: { ingredients: "", instructions: "" },
  });

  // Function to handle form changes for new diet chart
  const handleInputChange = (e, mealTime) => {
    const { name, value } = e.target;
    setNewDietChart((prevState) => ({
      ...prevState,
      [mealTime]: { ...prevState[mealTime], [name]: value },
    }));
  };

  // Function to handle adding a new diet chart
  const handleAddDietChart = () => {
    if (
      newDietChart.patientName &&
      newDietChart.morning.ingredients &&
      newDietChart.evening.ingredients &&
      newDietChart.night.ingredients
    ) {
      setDietCharts([
        ...dietCharts,
        { ...newDietChart, id: dietCharts.length + 1 },
      ]);
      setNewDietChart({
        patientName: "",
        morning: { ingredients: "", instructions: "" },
        evening: { ingredients: "", instructions: "" },
        night: { ingredients: "", instructions: "" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-5">
      <h2 className="text-center text-3xl text-purple-700 font-semibold mb-8">
        Diet Charts
      </h2>

      {/* Add New Diet Chart Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl text-purple-700 mb-4">Add New Diet Chart</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={newDietChart.patientName}
            onChange={(e) =>
              setNewDietChart({ ...newDietChart, patientName: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Morning Meal */}
          <div className="space-y-2">
            <h4 className="text-lg text-purple-600">Morning Meal</h4>
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={newDietChart.morning.ingredients}
              onChange={(e) => handleInputChange(e, "morning")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="instructions"
              placeholder="Special Instructions"
              value={newDietChart.morning.instructions}
              onChange={(e) => handleInputChange(e, "morning")}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Evening Meal */}
          <div className="space-y-2">
            <h4 className="text-lg text-purple-600">Evening Meal</h4>
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={newDietChart.evening.ingredients}
              onChange={(e) => handleInputChange(e, "evening")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="instructions"
              placeholder="Special Instructions"
              value={newDietChart.evening.instructions}
              onChange={(e) => handleInputChange(e, "evening")}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Night Meal */}
          <div className="space-y-2">
            <h4 className="text-lg text-purple-600">Night Meal</h4>
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={newDietChart.night.ingredients}
              onChange={(e) => handleInputChange(e, "night")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="instructions"
              placeholder="Special Instructions"
              value={newDietChart.night.instructions}
              onChange={(e) => handleInputChange(e, "night")}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            onClick={handleAddDietChart}
            className="w-full bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-600"
          >
            Add Diet Chart
          </button>
        </div>
      </div>

      {/* Existing Diet Charts */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl text-purple-700 mb-4">Existing Diet Charts</h3>
        <ul>
          {dietCharts.map((chart) => (
            <li key={chart.id} className="mb-8">
              <h4 className="text-xl text-purple-800 font-semibold">
                {chart.patientName}
              </h4>
              <div className="space-y-2 mt-4">
                <div>
                  <strong>Morning:</strong>
                  <p>
                    {chart.morning.ingredients} ({chart.morning.instructions})
                  </p>
                </div>
                <div>
                  <strong>Evening:</strong>
                  <p>
                    {chart.evening.ingredients} ({chart.evening.instructions})
                  </p>
                </div>
                <div>
                  <strong>Night:</strong>
                  <p>
                    {chart.night.ingredients} ({chart.night.instructions})
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DietChartPage;
