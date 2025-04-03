import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const controls = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  text: `SBSS.Physical.${i + 1} - Sample control statement`,
})).concat(
  Array.from({ length: 25 }, (_, i) => ({
    id: i + 26,
    text: `SBSS.InfoSec.${i + 1} - Sample control statement`,
  }))
)

const SBSSAssessment = () => {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = () => {
    const yesCount = Object.values(answers).filter((val) => val === 'yes').length
    const score = (yesCount / controls.length) * 100
    if (score >= 85) setResult('Secure')
    else if (score >= 60) setResult('Needs Improvement')
    else setResult('At-Risk')
  }

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">SBSS Assessment</h2>
      <p className="text-gray-400 mb-4">Answer the following yes/no questions:</p>
      <div className="text-left max-w-3xl mx-auto space-y-4">
        {controls.map((control) => (
          <div key={control.id} className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-2">
            <label className="text-sm mb-1 md:mb-0">{control.text}</label>
            <div>
              <select
                className="text-black rounded px-2 py-1"
                onChange={(e) => handleChange(control.id, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
      >
        Submit
      </button>

      {result && (
        <div className={`mt-6 text-xl font-bold ${result === 'Secure' ? 'text-green-400' : result === 'Needs Improvement' ? 'text-yellow-400' : 'text-red-500'}`}>
          Your SBSS Score: {result}
        </div>
      )}

      <div className="mt-8 text-sm text-blue-400 underline">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  )
}

export default SBSSAssessment