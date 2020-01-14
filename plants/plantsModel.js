const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("plants");
}
function findById(id) {
  return db("plants").where("user_id", "=", id);
}
function add(plant) {
  return db("plants")
    .insert(plant, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function update(changes, id) {
  return db("plants")
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db("plants")
    .where("id", id)
    .del();
}
