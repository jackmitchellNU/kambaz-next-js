"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle, FaPlus, FaTrash } from "react-icons/fa";
import { Button, Modal, Form } from "react-bootstrap";
import * as client from "../../../client";
import PeopleDetails from "../Details";
import Link from "next/link";

type User = { _id: string; firstName?: string; lastName?: string; username?: string };

export default function PeopleTable({ users: initialUsers = [], fetchUsers }: { users?: any[]; fetchUsers?: () => void; }) {
  const { cid } = useParams<{ cid: string }>();
  const [users, setUsers] = useState(initialUsers);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const fetchEnrolledUsers = async () => {
    if (!cid) return;
    try {
      const enrolledUsers = await client.findUsersForCourse(cid as string);
      setUsers(enrolledUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/users`);
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      console.error("Failed to fetch all users:", error);
    }
  };

  useEffect(() => {
    if (cid && (!initialUsers || initialUsers.length === 0)) {
      fetchEnrolledUsers();
    } else if (initialUsers && initialUsers.length > 0) {
      setUsers(initialUsers);
    }
  }, [cid, initialUsers]);

  const handleEnrollUser = async () => {
    if (!cid || !selectedUserId) return;
    try {
      await client.enrollIntoCourse(selectedUserId, cid);
      setShowEnrollModal(false);
      setSelectedUserId("");
      fetchEnrolledUsers();
    } catch (error) {
      console.error("Failed to enroll user:", error);
    }
  };

  const handleUnenrollUser = async (userId: string) => {
    if (!cid) return;
    try {
      await client.unenrollFromCourse(userId, cid);
      fetchEnrolledUsers();
    } catch (error) {
      console.error("Failed to unenroll user:", error);
    }
  };

  const openEnrollModal = () => {
    fetchAllUsers();
    setShowEnrollModal(true);
  };

  const getUnenrolledUsers = () => {
    const enrolledIds = users.map((u) => u._id);
    return allUsers.filter((u) => !enrolledIds.includes(u._id));
  };

  const displayName = (user: User) => {
    if (user.firstName || user.lastName) {
      return `${user.firstName || ""} ${user.lastName || ""}`.trim();
    }
    return user.username || "Unknown User";
  };

  return (
    <div id="wd-people-table" className="container-fluid p-3">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            if (fetchUsers) fetchUsers();
          }}
        />
      )}

      <Modal show={showEnrollModal} onHide={() => setShowEnrollModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select User to Enroll</Form.Label>
            <Form.Select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              <option value="">-- Select a user --</option>
              {getUnenrolledUsers().map((user) => (
                <option key={user._id} value={user._id}>
                  {displayName(user)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEnrollModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEnrollUser} disabled={!selectedUserId}>
            Enroll
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">People ({users.length})</h3>
        <Button variant="success" onClick={openEnrollModal}>
          <FaPlus className="me-2" /> Enroll User
        </Button>
      </div>
      {users.length === 0 ? (
        <div className="text-muted">No people enrolled in this course.</div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 60 }}></th>
                <th>User</th>
                <th style={{ width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <FaUserCircle 
                      className="me-2 fs-3 text-secondary" 
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowDetails(true);
                        setShowUserId(user._id);
                      }}
                    />
                  </td>
                  <td 
                    className="text-nowrap"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowDetails(true);
                      setShowUserId(user._id);
                    }}
                  >
                    {displayName(user)}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleUnenrollUser(user._id)}
                      title="Unenroll"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}