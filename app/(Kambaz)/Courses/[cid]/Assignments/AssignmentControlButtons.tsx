"use client";

import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "../../Assignments/reducer";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AssignmentControlButtons({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(assignmentId));
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="float-end">
        <FaCheckCircle className="text-success me-2" />
        <FaTrash
          className="text-danger me-2 mb-1"
          onClick={handleDeleteClick}
          style={{ cursor: "pointer" }}
        />
        <IoEllipsisVertical className="fs-4" />
      </div>

      <Modal show={showDeleteModal} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCancelDelete}
            id="wd-cancel-delete"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmDelete}
            id="wd-confirm-delete"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

