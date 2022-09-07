const mongoose = require("mongoose");
const navLinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("NavLink", navLinkSchema);
