const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function breakdownTask(
    task: string
): Promise<string[]> {

    const prompt = `
You are an expert task planner.

Break down the following task into clear, actionable, and logically ordered steps.
Each step should be specific, concise, and easy to execute.

Task:
"${task}"

Output requirements:
- Return a numbered list
- Each step should start with a verb
- Avoid vague or high-level descriptions
- Do not include explanations or extra text
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.4,
        }),
    });

    const data = await response.json();
    const content: string = data.choices[0].message.content;

    return content
        .split("\n")
        .map(line => line.replace(/^\d+\.?\s*/, "").trim())
        .filter(Boolean);
}
