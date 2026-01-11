import { createContext, useContext, ReactNode } from "react";

interface EnrollmentContextType {
  setShowEnrollDialog: (show: boolean) => void;
  navigateToEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
}

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const navigateToEnrollment = () => {
    // Use window.location for navigation since this provider is outside BrowserRouter
    window.location.href = '/courses/200-hour#book-now';
  };

  // setShowEnrollDialog now navigates instead of showing a dialog
  const setShowEnrollDialog = (show: boolean) => {
    if (show) {
      navigateToEnrollment();
    }
  };

  return (
    <EnrollmentContext.Provider value={{ setShowEnrollDialog, navigateToEnrollment }}>
      {children}
    </EnrollmentContext.Provider>
  );
}
