const { getUserName } = require('../../../database/queries');

const getTheUserName = async (req, res) => {
  const { id } = req;
  try {
    const data = await getUserName(id);
    res.json(data.rows);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getTheUserName };
