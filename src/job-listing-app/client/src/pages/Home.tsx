import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard";
import CompanyDetailsModal from "@/components/CompanyDetailsModal";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import { Job, jobsData } from "@/data/jobs";
import { Search, Briefcase } from "lucide-react";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "open" | "closed">("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Filter and search jobs
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Status filter
      if (selectedStatus === "open" && job.status !== "Open") return false;
      if (selectedStatus === "closed" && job.status === "Open") return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          job.title.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.id.toLowerCase().includes(query) ||
          job.qualification.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [searchQuery, selectedStatus]);

  const handleFillForm = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleCompanyDetails = (job: Job) => {
    setSelectedJob(job);
    setShowCompanyModal(true);
  };

  const openJobsCount = jobsData.filter((j) => j.status === "Open").length;
  const totalApplications = jobsData.reduce((sum, job) => sum + job.applicants, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
          </div>
          <p className="text-gray-600">
            Discover amazing career opportunities tailored for you
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Open Positions
            </p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {openJobsCount}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Total Jobs
            </p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {jobsData.length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Total Applications
            </p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {totalApplications}
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by job title, location, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) =>
                  setSelectedStatus(
                    e.target.value as "all" | "open" | "closed"
                  )
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Jobs</option>
                <option value="open">Open Positions</option>
                <option value="closed">Closed Positions</option>
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredJobs.length}</span> of{" "}
            <span className="font-bold text-gray-900">{jobsData.length}</span> jobs
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onFillForm={handleFillForm}
                onCompanyDetails={handleCompanyDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedStatus("all");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      {/* Modals */}
      <CompanyDetailsModal
        job={selectedJob}
        isOpen={showCompanyModal}
        onClose={() => {
          setShowCompanyModal(false);
          setSelectedJob(null);
        }}
      />

      <ApplicationFormModal
        job={selectedJob}
        isOpen={showApplicationModal}
        onClose={() => {
          setShowApplicationModal(false);
          setSelectedJob(null);
        }}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Your trusted platform for finding the perfect job opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@joblisting.com
                <br />
                Phone: +91 XXXXX XXXXX
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Job Listing Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

