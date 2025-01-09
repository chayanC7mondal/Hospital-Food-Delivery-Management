import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientPage = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      diseases: "Flu",
      allergies: "Peanuts",
      roomNumber: "101",
      bedNumber: "5",
      floorNumber: "1",
      age: 30,
      gender: "Male",
      contactInfo: "123-456-7890",
      emergencyContact: "987-654-3210",
    },
    {
      id: 2,
      name: "Jane Smith",
      diseases: "Cold",
      allergies: "None",
      roomNumber: "102",
      bedNumber: "3",
      floorNumber: "1",
      age: 28,
      gender: "Female",
      contactInfo: "555-555-5555",
      emergencyContact: "111-111-1111",
    },
  ]);

  // New Patient Form State
  const [newPatient, setNewPatient] = useState({
    name: "",
    diseases: "",
    allergies: "",
    roomNumber: "",
    bedNumber: "",
    floorNumber: "",
    age: "",
    gender: "",
    contactInfo: "",
    emergencyContact: "",
  });

  const handleAddPatient = () => {
    if (
      newPatient.name &&
      newPatient.diseases &&
      newPatient.allergies &&
      newPatient.roomNumber &&
      newPatient.bedNumber &&
      newPatient.floorNumber &&
      newPatient.age &&
      newPatient.gender &&
      newPatient.contactInfo &&
      newPatient.emergencyContact
    ) {
      setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
      setNewPatient({
        name: "",
        diseases: "",
        allergies: "",
        roomNumber: "",
        bedNumber: "",
        floorNumber: "",
        age: "",
        gender: "",
        contactInfo: "",
        emergencyContact: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-5">
      <h2 className="text-center text-3xl text-purple-700 font-semibold mb-8">
        Manage Patients
      </h2>

      {/* Add Patient Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl text-purple-700 mb-4">Add New Patient</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={newPatient.name}
            onChange={(e) =>
              setNewPatient({ ...newPatient, name: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Diseases"
            value={newPatient.diseases}
            onChange={(e) =>
              setNewPatient({ ...newPatient, diseases: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Allergies"
            value={newPatient.allergies}
            onChange={(e) =>
              setNewPatient({ ...newPatient, allergies: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Room Number"
            value={newPatient.roomNumber}
            onChange={(e) =>
              setNewPatient({ ...newPatient, roomNumber: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Bed Number"
            value={newPatient.bedNumber}
            onChange={(e) =>
              setNewPatient({ ...newPatient, bedNumber: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Floor Number"
            value={newPatient.floorNumber}
            onChange={(e) =>
              setNewPatient({ ...newPatient, floorNumber: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Age"
            value={newPatient.age}
            onChange={(e) =>
              setNewPatient({ ...newPatient, age: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            value={newPatient.gender}
            onChange={(e) =>
              setNewPatient({ ...newPatient, gender: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            placeholder="Contact Information"
            value={newPatient.contactInfo}
            onChange={(e) =>
              setNewPatient({ ...newPatient, contactInfo: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Emergency Contact"
            value={newPatient.emergencyContact}
            onChange={(e) =>
              setNewPatient({ ...newPatient, emergencyContact: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddPatient}
            className="w-full bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-600"
          >
            Add Patient
          </button>
        </div>
      </div>

      {/* List of Existing Patients */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl text-purple-700 mb-4">Existing Patients</h3>
        <ul>
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="text-lg text-purple-800">
                <span className="font-bold">{patient.name}</span> -{" "}
                {patient.age} years
              </div>
              <div>
                <Link
                  to="#"
                  className="text-purple-600 hover:text-purple-500 mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() =>
                    setPatients(patients.filter((p) => p.id !== patient.id))
                  }
                  className="text-red-600 hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientPage;
