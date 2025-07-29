
// === COHERE AI INTEGRATION ===
async function askCohere() {
  const prompt = document.getElementById("aiPrompt").value;
  const responseBox = document.getElementById("aiResponse");
  responseBox.textContent = "Generating response...";

  const apiKey = "7Hd3Jez1t0ihz2dhQkZn5iwYuicba73vQhsky0Hy"; // ← Replace this

  try {
    const res = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "command-nightly", // or "command"
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.7
      })
    });

    const data = await res.json();
    responseBox.textContent = data.generations?.[0]?.text.trim() || "No response.";
  } catch (err) {
    responseBox.textContent = "Something went wrong!";
    console.error(err);
  }
}

