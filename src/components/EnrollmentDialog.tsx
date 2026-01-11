import { createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const navigateToEnrollment = () => {
    navigate('/courses/200-hour#book-now');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const bookNowSection = document.getElementById('book-now');
      if (bookNowSection) {
        bookNowSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
