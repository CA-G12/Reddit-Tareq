const { getUserName } = require('../../../database/queries');

const getTheUserName = async (req, res) => {
  const { id } = req;
  try {
    const data = await getUserName(id);
    const { username } = data.rows[0];
    res.json({
      message: 'User exists',
      username,
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getTheUserName };
