import client from '../database/client';

const controller = {};

controller.create = async (req, res) => {
  try {
    await client.user.create({ data: req.body });

    return res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

export default controller;
