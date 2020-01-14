const db = require("../data/dbConfig.js");

module.exports = {
  add,
  findBy,
  findById,
  update
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "phoneNumber", "password")
    .where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username", "phoneNumber")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes);
}
