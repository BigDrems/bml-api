export const adminOnly = (req, res, next) => {
  if (req.user.role !== "ADMIN") return res.status(403).json({ message: "Admin only" });
  next();
};

export const expertOnly = (req, res, next) => {
  if (!["EXPERT", "ADMIN"].includes(req.user.role))
    return res.status(403).json({ message: "Expert only" });
  next();
};
