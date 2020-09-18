const billingCycle = require("./schemas");
const errorHandler = require("../middlewares/errorHandler");

billingCycle.methods(["get", "post", "put", "delete"]);

billingCycle.after("post", errorHandler).after("put", errorHandler);

billingCycle.updateOptions({
  new: true,
  runValidators: true,
});

billingCycle.route("get", (req, res, next) => {
  billingCycle.find({}, (err, docs) => {
    if (err) return res.status(500).json({ errors: [err] });
    return res.json(docs);
  });
});

billingCycle.route("count", (req, res, next) => {
  billingCycle.count((err, value) => {
    if (err) return res.status(500).json({ errors: [err] });
    return res.json({ value });
  });
});

billingCycle.route("summary", (req, res, next) => {
  billingCycle.aggregate(
    [
      {
        $project: {
          credit: { $sum: "$credits.value" },
          debit: { $sum: "$debits.value" },
        },
      },
      {
        $group: {
          _id: null,
          credit: { $sum: "$credit" },
          debit: { $sum: "$debit" },
        },
      },
      {
        $project: { _id: 0, credit: 1, debit: 1 },
      },
    ],
    (error, result) => {
      if (error) return res.status(500).json({ errors: [error] });

      return res.json(result[0] || { credit: 0, debt: 0 });
    }
  );
});

module.exports = billingCycle;
