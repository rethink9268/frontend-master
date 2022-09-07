const express = require("express");
const router = express.Router();
const NavLink = require("../../models/navLink.js");

router.get("/", async (req, res) => {
  try {
    const navlinks = await NavLink.find({});
    res.render("admin/navLinks/index", { navlinks: navlinks });
  } catch {
    res.redirect("/");
  }
});

router.get("/new", (req, res) => {
  res.render("admin/navLinks/new", { navlink: new NavLink() });
});

router.post("/", async (req, res) => {
  const navlink = new NavLink({
    name: req.body.name,
  });
  try {
    const newNavLink = await navlink.save();
    // res.redirect(`navlinks/${newNavLink.id}`);
    res.redirect(`navlinks`);
  } catch {
    res.render("admin/navLinks/new", {
      navlink: navlink,
      errorMessage: "Error creating Navigation Link",
    });
  }
});

module.exports = router;
