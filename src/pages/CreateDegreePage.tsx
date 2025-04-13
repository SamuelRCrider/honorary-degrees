import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDegreeStore } from "../store/useDegreeStore";
import DiplomaPreview from "../components/DiplomaPreview";
import AIDescriptionGenerator from "../components/AIDescriptionGenerator";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/common/Button";
import { ArrowRight } from "lucide-react";

export default function CreateDegreePage() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    title,
    setTitle,
    description,
    setDescription,
    trustee,
    setTrustee,
  } = useDegreeStore();

  const [activeTab, setActiveTab] = useState("info");
  const [progress, setProgress] = useState(33);

  // Update progress based on form completion
  useEffect(() => {
    if (activeTab === "preview") {
      setProgress(100);
    } else if (activeTab === "description") {
      setProgress(66);
    } else {
      setProgress(33);
    }
  }, [activeTab]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-3 text-gray-900 tracking-tight"
          >
            Create Your Honorary Degree
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Customize every aspect of your prestigious honorary degree.
          </motion.p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <motion.div
              className="bg-indigo-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-gray-100"
          >
            {/* Tabs */}
            <div className="flex px-2 pt-2 bg-gray-50 border-b border-gray-100">
              {["info", "description", "preview"].map((tab, index) => (
                <Button
                  key={tab}
                  variant="text"
                  withAnimation={false}
                  className={`relative px-6 py-4 rounded-t-lg mr-1 ${
                    activeTab === tab
                      ? "text-indigo-600 bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mr-2">
                      {index + 1}
                    </span>
                    {tab === "info" && "Degree Information"}
                    {tab === "description" && "AI Generator"}
                    {tab === "preview" && "Preview"}
                  </span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                      initial={false}
                    />
                  )}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {activeTab === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-2 font-medium text-gray-700"
                            >
                              Recipient Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-black!"
                              placeholder="e.g., John Smith"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="title"
                              className="block mb-2 font-medium text-gray-700"
                            >
                              Degree Title
                            </label>
                            <input
                              id="title"
                              type="text"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-black!"
                              placeholder="e.g., Doctor of Humane Letters"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="trustee"
                              className="block mb-2 font-medium text-gray-700"
                            >
                              Board of Trustees
                            </label>
                            <input
                              id="trustee"
                              type="text"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-black!"
                              placeholder="e.g., Dr. Jane Smith"
                              value={trustee}
                              onChange={(e) => setTrustee(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="description"
                            className="block mb-2 font-medium text-gray-700"
                          >
                            Degree Description
                          </label>
                          <p className="text-sm text-gray-500 mb-3">
                            Describe the achievements or qualifications that
                            merit this honorary degree. You can also use our AI
                            description generator in the next tab.
                          </p>
                          <textarea
                            id="description"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all min-h-[240px] text-black!"
                            placeholder="e.g., Having demonstrated exceptional achievement and contribution to society..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          type="button"
                          variant="secondary"
                          icon={<ArrowRight />}
                          onClick={() => setActiveTab("description")}
                        >
                          Try AI Description
                        </Button>
                        <Button
                          type="button"
                          variant="primary"
                          onClick={() => setActiveTab("preview")}
                        >
                          Preview Degree
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {activeTab === "description" && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AIDescriptionGenerator />
                    <div className="mt-8 flex justify-end">
                      <Button
                        variant="primary"
                        onClick={() => setActiveTab("preview")}
                      >
                        Preview Degree
                      </Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "preview" && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DiplomaPreview />
                    <div className="mt-8 flex justify-end">
                      <Button
                        variant="primary"
                        icon={<ArrowRight />}
                        onClick={() => navigate("/checkout")}
                      >
                        Continue to Checkout
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
