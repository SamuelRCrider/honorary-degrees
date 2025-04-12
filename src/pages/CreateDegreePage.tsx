import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDegreeStore } from "../store/useDegreeStore";
import DiplomaPreview from "../components/DiplomaPreview";
import AIDescriptionGenerator from "../components/AIDescriptionGenerator";

export default function CreateDegreePage() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    title,
    setTitle,
    description,
    setDescription,
    university,
    setUniversity,
    date,
    setDate,
  } = useDegreeStore();

  const [activeTab, setActiveTab] = useState("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Create Your Honorary Degree
        </h1>
        <p className="text-gray-600 mb-8">
          Customize every aspect of your prestigious honorary degree.
        </p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              className={`px-4 py-3 font-medium focus:outline-none ${
                activeTab === "info"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("info")}
            >
              Degree Information
            </button>
            <button
              className={`px-4 py-3 font-medium focus:outline-none ${
                activeTab === "description"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("description")}
            >
              AI Description Generator
            </button>
            <button
              className={`px-4 py-3 font-medium focus:outline-none ${
                activeTab === "preview"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
          </div>

          <div className="p-6">
            {activeTab === "info" && (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Recipient Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Degree Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., Doctor of Humane Letters"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="university"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        University Name
                      </label>
                      <input
                        id="university"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., Prestigious University"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Date of Conferral
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Degree Description
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Describe the achievements or qualifications that merit
                      this honorary degree. You can also use our AI description
                      generator in the next tab.
                    </p>
                    <textarea
                      id="description"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={10}
                      placeholder="e.g., Having demonstrated exceptional achievement and contribution to society..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    className="py-2 px-4 text-indigo-600 font-medium rounded-md border border-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
                    onClick={() => setActiveTab("description")}
                  >
                    Try AI Description →
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => setActiveTab("preview")}
                  >
                    Preview Degree
                  </button>
                </div>
              </form>
            )}

            {activeTab === "description" && (
              <div>
                <AIDescriptionGenerator />
                <div className="mt-6 text-right">
                  <button
                    className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => setActiveTab("preview")}
                  >
                    Preview Degree
                  </button>
                </div>
              </div>
            )}

            {activeTab === "preview" && (
              <div>
                <DiplomaPreview />
                <div className="mt-6 flex justify-end">
                  <button
                    className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => navigate("/checkout")}
                  >
                    Continue to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
