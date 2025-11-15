import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      // Ignore expected errors: 401 (not authenticated) and network errors in dev/deployment.
      // These are normal for anonymous visitors or misconfigured environments.
      if (err.code !== "ERR_NETWORK" && !(err.response && err.response.status === 401)) {
        console.error("Failed to fetch profile:", err.message);
      }
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
