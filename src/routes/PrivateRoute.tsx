
import type React from "react";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  // If there's no user, don't render children while redirecting
  if (!user) {
    return null;
  }

  // If there is a user, render the children (protected content)
  return <>{children}</>;
};

export default PrivateRoute;
