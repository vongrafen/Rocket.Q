module.exports = {
  create(req, res) {
    let roomId = "123123";
    res.redirect(`/room/${roomId}`)
  }
}