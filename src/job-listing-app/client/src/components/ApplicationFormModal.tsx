import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Job } from "@/data/jobs";
import { useState } from "react";
import { toast } from "sonner";

interface ApplicationFormModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationFormModal({
  job,
  isOpen,
  onClose,
}: ApplicationFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(`Application submitted for ${job.title}!`);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        resume: "",
        coverLetter: "",
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Apply for {job.title}
          </DialogTitle>
          <p className="text-sm text-gray-500 mt-2">Job ID: {job.id}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Years of Experience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Years of Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select experience level</option>
              <option value="fresher">Fresher (0 years)</option>
              <option value="1-2">1-2 years</option>
              <option value="2-5">2-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          {/* Resume Link */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Resume/CV Link *
            </label>
            <input
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              required
              placeholder="https://drive.google.com/file/..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Provide a link to your resume (Google Drive, Dropbox, etc.)
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

