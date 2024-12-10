import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ElementType } from "react";

const IsAuthenticated = () => {
  // Implement your authentication logic here (e.g., check token, user session, etc.)
  let token = undefined;
  const { status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>; // Display a loading state
  }

  if (typeof window != "undefined") {
    token = localStorage.getItem("authToken");
  }

  return token || status;
};

function withAuth<P>(WrappedComponent: ElementType) {
  return (props: P) => {
    if (!IsAuthenticated() || IsAuthenticated() == "unauthenticated") {
      // Redirect to login page if not authenticated
      return redirect("/");
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
