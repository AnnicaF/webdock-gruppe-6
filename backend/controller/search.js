// search route
router.get("/v1/search", async (req, res) => {
  try {
    const searchQuery = req.query.q;
    // search logic her
    const searchResults = await YourModel.findAll({
      where: {
        // search conditions baseret på "searchQuery"
      },
    });

    res.status(200).json(searchResults);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
