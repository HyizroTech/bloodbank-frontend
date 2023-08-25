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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import axios from "axios";
import { getUserId } from "../../../Services/userId.service";
import { AuthenticationService } from "../../../Services";

const InventoryTable = () => {
  const [inventories, setInventories] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const [bloodType, setBloodType] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleAddClose = () => {
    setOpenAddDialog(false);
  };

  const handleAdd = async () => {
    const data = {
      bloodType,
      quantity,
    };
    const userId = getUserId();
    const token = AuthenticationService.getAuthToken();
    try {
      await axios
        .post(`/api/bloodBank/${userId}/bloodInventory`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => window.location.reload());
    } catch (error) {}
  };

  const handleEditClick = (inventoryId) => {
    setSelectedInventory(inventoryId);
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setSelectedInventory(null);
    setOpenEditDialog(false);
  };

  const handleEdit = async () => {
    const data = { bloodType, quantity };
    const token = AuthenticationService.getAuthToken();
    try {
      await axios
        .put(`api/bloodInventory/${selectedInventory}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => window.location.reload());
    } catch (error) {}
    setOpenEditDialog(false);
    setSelectedInventory(null);
  };

  const handleDelete = async (id) => {
    const token = AuthenticationService.getAuthToken();
    try {
      await axios
        .delete(`api/bloodInventory/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => window.location.reload());
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getBloodBankInventories = async (id, token) => {
      try {
        const response = await axios.get(
          `/api/bloodBank/${id}/bloodInventories`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setInventories(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    const currentUserId = getUserId();
    const token = AuthenticationService.getAuthToken();
    getBloodBankInventories(currentUserId, token);
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Blood Type</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventories.map((inventory) => (
            <TableRow key={inventory.bloodInventoryId}>
              <TableCell>{inventory.bloodType}</TableCell>
              <TableCell>{inventory.quantity}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleEditClick(inventory.bloodInventoryId)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDelete(inventory.bloodInventoryId)}
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
        <DialogTitle>Add New Inventory</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Blood Type"
            fullWidth
            onChange={(e) => setBloodType(e.target.value)}
          />
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Quantity"
            fullWidth
            onChange={(e) => setQuantity(e.target.value)}
          />
        </DialogContent>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
        <Button onClick={handleAddClose} color="secondary">
          Cancel
        </Button>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleEditClose}>
        <DialogTitle>Add New Inventory</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Blood Type"
            fullWidth
            onChange={(e) => setBloodType(e.target.value)}
          />
          <TextField
            sx={{ margin: "1rem 0" }}
            label="Quantity"
            fullWidth
            onChange={(e) => setQuantity(e.target.value)}
          />
        </DialogContent>
        <Button onClick={handleEdit} color="primary">
          Edit
        </Button>
        <Button onClick={handleEditClose} color="secondary">
          Cancel
        </Button>
      </Dialog>
    </>
  );
};

export default InventoryTable;
