const billingCycle = require("./schemas");
billingCycle.methods(["get", "post", "put", "delete"]);
billingCycle.updateOptions({
  new: true,
  runValidators: true,
});

billingCycle.route("get", (req, res, next) => {
  billingCycle.find({}, (err, docs) => {
    if (err) return res.status(500).json({ errors: [error] });
    return res.json(docs);
  });
});

module.exports = billingCycle;
