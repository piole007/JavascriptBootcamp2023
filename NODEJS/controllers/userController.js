import userModel from "../models/userModel.js";

// CREATE

export const createUser = async (req, res) => {
  try {
    const user = new userModel({
      ...req.body,
    });

    await user.save();

    res.status(201).send(`New user named: ${req.body.name} is created`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// GET ALL

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// GET ONE

export const getUser = async (req, res) => {
  try {
    const users = await userModel.find({ name: req.params.name });

    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// DELETE
export const deleteUser = async (req, res) => {
  try {
    const users = await userModel.deleteOne({ name: req.params.name });

    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const users = await userModel.findOneAndUpdate(
      {
        name: req.params.name,
      },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
