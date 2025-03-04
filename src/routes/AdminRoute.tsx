
import type React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice"; // Adjust path accordingly
import type { RootState } from "@/redux/store";
import { useNavigate } from "react-router";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      dispatch(logout()); // Logs out the user
    }
  }, [user, dispatch]);

  // Redirect to login page after logout
  if (!user || user.role !== "admin") {
    navigate("/login", { replace: true });
    return null; // Prevents rendering content
  }

  return <>{children}</>;
};

export default AdminRoute;
