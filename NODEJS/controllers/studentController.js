import studentModel from "../models/studentModel.js";

// CREATE

export const createStudent = async (req, res) => {
  try {
    const student = new studentModel({
      // taking data from Insomnia
      ...req.body,
    });
    // for async function have to add await
    await student.save();

    res.status(201).send(`New student named: ${req.body.name} is created`);
  } catch (error) {
    // error message in terminal
    console.log(error);
    // error message in insomnia
    res.status(400).send(error);
  }
};

// GET ALL

export const getAllStudents = async (req, res) => {
  try {
    // studentModel.find({}) - filter all, .send(students) - send a list of students
    const students = await studentModel.find({});

    res.status(201).send(students);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// GET ONE

export const getStudent = async (req, res) => {
  try {
    const students = await studentModel.find({ name: req.params.name });

    res.status(201).send(students);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// DELETE
export const deleteStudent = async (req, res) => {
  try {
    const students = await studentModel.deleteOne({ name: req.params.name });

    res.status(201).send(students);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// UPDATE
export const updateStudent = async (req, res) => {
  try {
    const students = await studentModel.findOneAndUpdate(
      {
        name: req.params.name,
      },
      // specify what you want to update, $set: req.body - selector sets whatever user passes
      {
        $set: req.body,
      },
      // to return new student
      { new: true }
    );

    res.status(201).json(students);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
