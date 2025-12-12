const updateData = {};
for (const field of updatableFields) {
  if (req.body[field] !== undefined && req.body[field] !== null) {
    updateData[field] = req.body[field];
  }
}