import bcrypt from "bcryptjs";

// in-memory “database” example (replace with real DB)
const users = new Map();

export async function registerUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const hash = await bcrypt.hash(password, 10);
  users.set(email, { email, password: hash });
  res.json({ success: true, message: "User registered" });
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ error: "Invalid login" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Invalid login" });

  res.json({ success: true, message: "Logged in" });
}
