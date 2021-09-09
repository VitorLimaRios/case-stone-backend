const connection = require('./connection');

const create = async (username, email, password) => {
  const [results] = await connection.query(
    'INSERT INTO users SET ?', { username, email, password }, (error) => {
      if (error) throw error;
    },
  );
  return results.insertId;
};

const getByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email],
  );
  return user[0];
};

const update = async (username, email, password, id) => {
  const [user] = await connection.execute(
    'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
    [username, email, password, id],
  );
  return user;
};

module.exports = {
  create,
  getByEmail,
  update,
};
