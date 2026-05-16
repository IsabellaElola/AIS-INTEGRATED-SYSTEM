<<<<<<< HEAD
import * as AuthService from '../service/authService.js';
=======
import * as AuthService from '../services/authService.js';
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f

export const registerStudent = async (req, res) => {
    const { firstName, lastName, dob, course, major, address, status } = req.body;

    try { 
        const studentProfile = {
            firstName,
            lastName,
            dob,
            course,
            major,
            address,
            status
        };
        const result = await AuthService.registerStudent(studentProfile);
        res.status(201).json({
            success: true,
            message: result }); 
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: "An error occurred while registering the student.",
        });
        console.error("Error in register controller:", error);

    }
<<<<<<< HEAD
};

export const getStudentProfile = async (req, res) => {
  try {
    console.log("Adapter req.params:", req.params);

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Student id is missing from URL"
      });
    }

    const studentProfile = await AuthService.getStudentProfile(id);

    res.status(200).json({
      success: true,
      studentProfile
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
=======
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
};