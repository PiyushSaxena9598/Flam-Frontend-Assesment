const generateStudyMaterial = require("../services/gemini");
const StudySchema = require("../utils/validator");

exports.generateAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const response = await generateStudyMaterial(prompt);

    let parsed;

    try {
      parsed = JSON.parse(response);
    } catch {
      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON.",
      });
    }

    const validation = StudySchema.safeParse(parsed);

    if (!validation.success) {
      return res.status(500).json({
        success: false,
        message: "Invalid response structure.",
      });
    }

    return res.json({
      success: true,
      data: validation.data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};