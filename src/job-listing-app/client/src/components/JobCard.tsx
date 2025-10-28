import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Job } from "@/data/jobs";
import { Clock, Users, MapPin, DollarSign, FileText } from "lucide-react";
import { useState } from "react";

interface JobCardProps {
  job: Job;
  onFillForm: (job: Job) => void;
  onCompanyDetails: (job: Job) => void;
}

export default function JobCard({
  job,
  onFillForm,
  onCompanyDetails,
}: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusColor =
    job.status === "Open"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Header with Status Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {job.title}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColor}`}>
              {job.status}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Job ID</p>
            <p className="font-semibold text-gray-900">{job.id}</p>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Location */}
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Location
              </p>
              <p className="text-sm text-gray-900 font-medium">{job.location}</p>
            </div>
          </div>

          {/* Budget */}
          <div className="flex items-start gap-2">
            <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Budget
              </p>
              <p className="text-sm text-gray-900 font-medium">{job.budget}</p>
            </div>
          </div>

          {/* Openings */}
          <div className="flex items-start gap-2">
            <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Openings
              </p>
              <p className="text-sm text-gray-900 font-medium">
                {job.openings} Position{job.openings > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Days Remaining */}
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Days Left
              </p>
              <p className="text-sm text-gray-900 font-medium">
                {job.daysRemaining > 0 ? `${job.daysRemaining} days` : "Closed"}
              </p>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <p className="text-xs text-gray-500 font-semibold uppercase mb-2">
            Key Qualifications
          </p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {job.qualification}
          </p>
        </div>

        {/* Applicants Count */}
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-600">
            <span className="font-bold text-gray-900">{job.applicants}</span>{" "}
            people applied
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => onFillForm(job)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Fill Form
          </Button>
          <Button
            onClick={() => onCompanyDetails(job)}
            variant="outline"
            className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Company Details
          </Button>
        </div>
      </div>
    </Card>
  );
}

