const Database = require("../db/config")

module.exports = {
  index(req, res) {
    const roomID = req.params.room;
    const questionID = req.params.question
    const action = req.params.action;
    const password = req.body.password;

    console.log(`room = ${roomID}, question = ${questionID}, 
    action = ${action}, password = ${password}`);
  },

  async create(req, res) {
    const db = await Database();
    const question = req.body.question;
    const roomId = req.params.room;

    await db.run(`INSERT INTO questions (
      title,
      room,
      read
    ) VALUES (
      "${question}",
      ${roomId},
      0
    )`)

    res.redirect(`/room/${roomId}`)
  }
}