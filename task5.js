async (req, res) => {
  const match = {};

  if (req.query.type) {
    match.type = req.query.type;
  }
  if (req.query.groupId) {
    match.groupId = req.query.groupId;
  }
  try {
    const doc = await nft.find(req.body.name, match);
    res.status(200).json({ doc });
  } catch (error) {
    res.status(500).send();
  }
};
