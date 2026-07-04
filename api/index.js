export default async function handler(req, res) {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbwHd2hAkySwtbbLbET8fUSJ4caQX3xR8ASp_jZ2dISyAFyIFDrYdjYX4zbjdHzSyIF5/exec";

  try {
    const response = await fetch(GAS_URL, {
      method: req.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: req.method === "GET" ? undefined : JSON.stringify(req.body)
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(response.status).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
