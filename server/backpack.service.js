module.exports = function(app) {
    const backpackModel = require("./model/backpack/backpack.model");
  
    // Find all backpacks
    app.get('/api/backpack', async (req, res) => {
      const backpacks = await backpackModel.findAllBackpacks();
      res.json(backpacks);
    });

    // Find backpack by id
    app.get("/api/backpack/:id", async(req, res) => {
      const backpack = await backpackModel.findById(req.params.id);
      res.json(backpack);
    })
  
    // Create new backpack
    app.post('/api/backpack', async (req, res) => {
      const newBackpack = req.body;
      const data = await backpackModel.createBackpack(newBackpack);
      res.json(data);
    });
  
    // Delete backpack with given id
    app.delete('/api/backpack/:id', async (req, res) => {
      const id = req.params['id'];
      const data = await backpackModel.deleteBackpack(id);
      res.json(data);
    });
  
    // Update backpack
    app.put('/api/backpack', async (req, res) => {
      const newBackpack = req.body;
      const data = await backpackModel.updateWebsite(newBackpack);
      res.json(data);
    })
  };