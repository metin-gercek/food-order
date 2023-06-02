import cookie from "cookie";

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60, // 1 hour
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(403).json({ message: "Invalid credentials" });
    }
  }
};

export default handler;
