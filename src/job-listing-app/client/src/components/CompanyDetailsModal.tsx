import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Job } from "@/data/jobs";
import { X } from "lucide-react";

interface CompanyDetailsModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyDetailsModal({
  job,
  isOpen,
  onClose,
}: CompanyDetailsModalProps) {
  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Job ID and Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Job ID
              </p>
              <p className="text-lg font-bold text-gray-900">{job.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Status
              </p>
              <p
                className={`text-lg font-bold ${
                  job.status === "Open"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {job.status}
              </p>
            </div>
          </div>

          {/* Location and Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Location
              </p>
              <p className="text-base text-gray-900">{job.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Employment Type
              </p>
              <p className="text-base text-gray-900">{job.type}</p>
            </div>
          </div>

          {/* Budget and Openings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Budget / Salary
              </p>
              <p className="text-base text-gray-900 font-semibold">
                {job.budget}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
                Number of Openings
              </p>
              <p className="text-base text-gray-900">{job.openings}</p>
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase mb-2">
              Required Qualifications
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {job.qualification}
            </p>
          </div>

          {/* Payment Terms */}
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase mb-2">
              Payment & Replacement Terms
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {job.paymentTerms}
            </p>
          </div>

          {/* Applicants */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Total Applicants
            </p>
            <p className="text-2xl font-bold text-blue-600">{job.applicants}</p>
          </div>

          {/* Days Remaining */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 font-semibold uppercase mb-1">
              Position Closes In
            </p>
            <p className="text-2xl font-bold text-orange-600">
              {job.daysRemaining > 0 ? `${job.daysRemaining} days` : "Closed"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Close
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

