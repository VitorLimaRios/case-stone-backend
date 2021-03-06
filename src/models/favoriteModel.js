const connection = require('./connection');

const create = async (userid, favorited, type) => {
  connection.query(
    'INSERT INTO favorites SET ?', { userid, favorited, type }, (error) => {
      if (error) throw error;
    },
  );
};

const getByIdAndType = async (userid) => {
  const [post] = await connection.execute(
    'SELECT favorited, type FROM favorites WHERE userid = ?',
    [userid],
  );
  return post;
};

const destroy = async (favorited) => {
  await connection.execute(
    'DELETE FROM favorites WHERE favorited = ?',
    [favorited],
  );
};

module.exports = {
  create,
  getByIdAndType,
  destroy,
};
