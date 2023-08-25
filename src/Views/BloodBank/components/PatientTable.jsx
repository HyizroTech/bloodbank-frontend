import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { getUserId } from "../../../Services/userId.service";
import { AuthenticationService } from "../../../Services";

const PatientTable = () => {
  const [patients, setPatients] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleAddClose = () => {
    setOpenAddDialog(false);
  };

  const handleAdd = async () => {
    const data = {
      name,
      age,
      gender,
      bloodType,
    };
    console.log(data);
    try {
      const userId = getUserId();
      const token = AuthenticationService.getAuthToken();
      await axios
        .post(`/api/bloodBank/${userId}/patient`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setOpenAddDialog(false);
          window.location.reload();
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getBloodBankPatients = async (id, token) => {
      try {
        const response = await axios.get(`/api/bloodBank/${id}/patients`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setPatients(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    const currentUserId = getUserId();
    const token = AuthenticationService.getAuthToken();
    getBloodBankPatients(currentUserId, token);
  }, []);

  const handleDeleting = async (patientId) => {
    console.log(patientId);
    try {
      const token = AuthenticationService.getAuthToken();
      await axios
        .delete(`api/patient/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => window.location.reload());
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Blood Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.patientId}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.bloodType}</TableCell>
              <TableCell>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleting(patient.patientId)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        sx={{ margin: "1rem 1rem" }}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Add
      </Button>

      <Dialog open={openAddDialog} onClose={handleAddClose}>
        <DialogTitle>Add New Patient</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Age"
            fullWidth
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Gender"
            fullWidth
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Blood Type"
            fullWidth
            onChange={(e) => setBloodType(e.target.value)}
          />
        </DialogContent>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
        <Button onClick={handleAddClose} color="secondary">
          Cancel
        </Button>
      </Dialog>
    </>
  );
};

export default PatientTable;
