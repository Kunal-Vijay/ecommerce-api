const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("User test is successful");
});

router.post("/userPost", (req, res) => {
    const userName = req.body.username;
    console.log(userName); 
});

module.exports = router;
