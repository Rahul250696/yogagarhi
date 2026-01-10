import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EnrollmentContextType {
  showEnrollDialog: boolean;
  setShowEnrollDialog: (show: boolean) => void;
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
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);

  return (
    <EnrollmentContext.Provider value={{ showEnrollDialog, setShowEnrollDialog }}>
      {children}
      <EnrollmentDialogContent />
    </EnrollmentContext.Provider>
  );
}

function EnrollmentDialogContent() {
  const { showEnrollDialog, setShowEnrollDialog } = useEnrollment();
  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    contact: '',
    courseName: '',
    courseDate: '',
    accommodation: '',
    gender: '',
    country: '',
    source: '',
    message: ''
  });

  const isEnrollFormComplete = enrollForm.name && enrollForm.email && enrollForm.contact && 
    enrollForm.courseName && enrollForm.courseDate && enrollForm.accommodation && 
    enrollForm.gender && enrollForm.country && enrollForm.source;

  const courseDates = [
    "December, 2025", "January, 2026", "February, 2026", "March, 2026", "April, 2026",
    "May, 2026", "June, 2026", "July, 2026", "August, 2026", "September, 2026",
    "October, 2026", "November, 2026", "December, 2026", "January, 2027", "February, 2027",
    "March, 2027", "April, 2027", "May, 2027", "June, 2027", "July, 2027",
    "August, 2027", "September, 2027", "October, 2027", "November, 2027", "December, 2027"
  ];

  const handleSubmit = () => {
    console.log('Enrollment submitted:', enrollForm);
    setShowEnrollDialog(false);
    setEnrollForm({
      name: '', email: '', contact: '', courseName: '', courseDate: '',
      accommodation: '', gender: '', country: '', source: '', message: ''
    });
  };

  return (
    <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Enroll Now</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Fill in your details to begin your yoga journey
          </p>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={enrollForm.name}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              value={enrollForm.email}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Contact/WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Contact No./WhatsApp No. <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              value={enrollForm.contact}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, contact: e.target.value }))}
              placeholder="+1 234 567 8900"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Course Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Course Name <span className="text-destructive">*</span>
            </label>
            <select
              value={enrollForm.courseName}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, courseName: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Choose Your Yoga Course</option>
              <option value="100 Hour Yoga Teacher Training Course in Bali">100 Hour Yoga Teacher Training Course in Bali</option>
              <option value="200 Hour Yoga Teacher Training Course in Bali">200 Hour Yoga Teacher Training Course in Bali</option>
              <option value="300 Hour Yoga Teacher Training Course in Bali">300 Hour Yoga Teacher Training Course in Bali</option>
            </select>
          </div>
          
          {/* Course Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Course Date <span className="text-destructive">*</span>
            </label>
            <select
              value={enrollForm.courseDate}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, courseDate: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Choose...</option>
              {courseDates.map((date) => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
          </div>
          
          {/* Accommodation */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Accommodation <span className="text-destructive">*</span>
            </label>
            <select
              value={enrollForm.accommodation}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, accommodation: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Select Accommodation</option>
              <option value="Private Room">Private Room</option>
              <option value="Shared Room">Shared Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
            </select>
          </div>
          
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Gender <span className="text-destructive">*</span>
            </label>
            <select
              value={enrollForm.gender}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, gender: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          
          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Country <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={enrollForm.country}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, country: e.target.value }))}
              placeholder="Enter your country"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Source */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              From where you get to know about us? <span className="text-destructive">*</span>
            </label>
            <select
              value={enrollForm.source}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, source: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Choose</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Recommendation">Recommendation</option>
              <option value="Any other source">Any other source</option>
            </select>
          </div>
          
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              value={enrollForm.message}
              onChange={(e) => setEnrollForm(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Any additional message or questions..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
        </div>
        
        <Button 
          className="w-full mt-6" 
          size="lg"
          disabled={!isEnrollFormComplete}
          onClick={handleSubmit}
        >
          Submit Enrollment
        </Button>
      </DialogContent>
    </Dialog>
  );
}
