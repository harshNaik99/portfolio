
'use client'

import '../globals.css'
import { useState, useEffect, useCallback } from 'react';

interface Job {
  jobType: string;
  email: string;
  jobTitle: string;
  city: string;
  experience: string;
  source: string;
}

interface GoogleSheetCell {
  v?: string | number;
}

interface GoogleSheetRow {
  c: GoogleSheetCell[];
}

export default function JobListingsPage() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Configuration
  const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/gviz/tq?tqx=out:json&sheet=YOUR_SHEET_NAME';
  const JSON_FILE_PATH = '/jobs.json';

  // Fallback data
  const getFallbackData = useCallback((): Job[] => {
    return [
      {
        jobType: "Remote",
        email: "hr@techcorp.com",
        jobTitle: "Senior Software Engineer",
        city: "Surat, Gujarat",
        experience: "5+ years",
        source: "Sample Data"
      },
      {
        jobType: "Hybrid",
        email: "careers@innovate.com",
        jobTitle: "Product Manager",
        city: "Mumbai, Maharashtra",
        experience: "3-5 years",
        source: "Sample Data"
      },
      {
        jobType: "WFO",
        email: "jobs@datatech.com",
        jobTitle: "Data Analyst",
        city: "Bangalore, Karnataka",
        experience: "2-4 years",
        source: "Sample Data"
      },
      {
        jobType: "Remote",
        email: "hiring@cloudbase.com",
        jobTitle: "DevOps Engineer",
        city: "Pune, Maharashtra",
        experience: "4-6 years",
        source: "Sample Data"
      },
      {
        jobType: "Hybrid",
        email: "recruitment@webdev.com",
        jobTitle: "Frontend Developer",
        city: "Ahmedabad, Gujarat",
        experience: "2-4 years",
        source: "Sample Data"
      },
      {
        jobType: "WFO",
        email: "hr@finance.com",
        jobTitle: "Business Analyst",
        city: "Delhi, NCR",
        experience: "3-5 years",
        source: "Sample Data"
      }
    ];
  }, []);

  // Load from Google Sheets
  const loadJobsFromGoogleSheets = useCallback(async (): Promise<Job[]> => {
    try {
      const response = await fetch(GOOGLE_SHEET_URL);
      const text = await response.text();
      
      // Fix: Use substring instead of substr
      const json = JSON.parse(text.substring(47, text.length - 2));
      const rows: GoogleSheetRow[] = json.table.rows;

      const sheetJobs = rows.slice(1).map((row: GoogleSheetRow) => {
        const cells = row.c;
        return {
          jobType: cells[0]?.v?.toString() || '',
          email: cells[1]?.v?.toString() || '',
          jobTitle: cells[2]?.v?.toString() || '',
          city: cells[3]?.v?.toString() || '',
          experience: cells[4]?.v?.toString() || '',
          source: 'Google Sheets'
        };
      }).filter((job: Job) => job.jobTitle && job.email);

      console.log(`✅ Loaded ${sheetJobs.length} jobs from Google Sheets`);
      return sheetJobs;
    } catch (error) {
      console.warn('⚠️ Could not load from Google Sheets:', error instanceof Error ? error.message : 'Unknown error');
      return [];
    }
  }, [GOOGLE_SHEET_URL]);

  // Load from JSON
  const loadJobsFromJSON = useCallback(async (): Promise<Job[]> => {
    try {
      const response = await fetch(JSON_FILE_PATH);
      if (!response.ok) {
        throw new Error('JSON file not found');
      }
      const jsonJobs = await response.json();
      
      const jobsWithSource = jsonJobs.map((job: Job) => ({
        ...job,
        source: 'JSON File'
      }));

      console.log(`✅ Loaded ${jobsWithSource.length} jobs from JSON file`);
      return jobsWithSource;
    } catch (error) {
      console.warn('⚠️ Could not load from JSON file:', error instanceof Error ? error.message : 'Unknown error');
      return [];
    }
  }, [JSON_FILE_PATH]);

  // Load all jobs
  useEffect(() => {
    async function loadAllJobs() {
      setIsLoading(true);
      
      const [sheetJobs, jsonJobs] = await Promise.all([
        loadJobsFromGoogleSheets(),
        loadJobsFromJSON()
      ]);

      let jobs: Job[] = [...sheetJobs, ...jsonJobs];

      // Remove duplicates
      const uniqueJobs: Job[] = [];
      const seen = new Set<string>();
      
      jobs.forEach((job: Job) => {
        const key = `${job.email}_${job.jobTitle}`.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          uniqueJobs.push(job);
        }
      });

      if (uniqueJobs.length === 0) {
        console.log('ℹ️ Using fallback sample data');
        setAllJobs(getFallbackData());
      } else {
        setAllJobs(uniqueJobs);
      }

      setIsLoading(false);
    }

    loadAllJobs();
  }, [loadJobsFromGoogleSheets, loadJobsFromJSON, getFallbackData]);

  // Filter jobs
  const filteredJobs = currentFilter === 'all' 
    ? allJobs 
    : allJobs.filter((job) => 
        job.jobType.toLowerCase().replace(/\s+/g, '-') === currentFilter.toLowerCase()
      );

  // Split into columns
  const midpoint = Math.ceil(filteredJobs.length / 2);
  const column1Jobs = filteredJobs.slice(0, midpoint);
  const column2Jobs = filteredJobs.slice(midpoint);

  
  // Job card component
  const JobCard = ({ job }) => {
    const jobTypeClass = job.jobType.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-200 animate-fadeIn">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-semibold text-gray-800 leading-tight flex-1">
            {job.jobTitle}
          </h3>
          <span className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-full whitespace-nowrap
            ${jobTypeClass === 'remote' ? 'bg-green-50 border border-green-200 text-green-700' : ''}
            ${jobTypeClass === 'hybrid' ? 'bg-blue-50 border border-blue-200 text-blue-700' : ''}
            ${(jobTypeClass === 'wfo' || jobTypeClass === 'work-from-office') ? 'bg-amber-50 border border-amber-200 text-amber-700' : ''}
            ${!['remote', 'hybrid', 'wfo', 'work-from-office'].includes(jobTypeClass) ? 'bg-gray-50 border border-gray-200 text-gray-700' : ''}
          `}>
            {job.jobType}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <strong className="text-gray-800 font-semibold min-w-[90px]">Email:</strong>
            <a 
              href={`mailto:${job.email}`} 
              className="text-gray-900 hover:text-gray-600 hover:underline transition-colors break-all"
            >
              {job.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <strong className="text-gray-800 font-semibold min-w-[90px]">Location:</strong>
            <span>{job.city}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <strong className="text-gray-800 font-semibold min-w-[90px]">Experience:</strong>
            <span>{job.experience}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 py-8 px-8 text-center shadow-lg">
        <h1 className="text-white text-4xl font-light tracking-tight mb-2">
          HR Job Listings
        </h1>
        <p className="text-gray-400 text-base">
          Find your next opportunity
        </p>
      </header>

      {/* Filter Section */}
      <div className="bg-white py-8 px-8 border-b border-gray-200 shadow-sm">
        <div className="flex gap-4 justify-center flex-wrap">
          {['all', 'remote', 'hybrid', 'wfo', 'remote-job-site'].map((filter) => (
            <button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 border
                ${currentFilter === filter 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-800 border-gray-900 hover:bg-gray-900 hover:text-white'
                }
              `}
            >
              {filter === 'all' ? 'All Jobs' : 
               filter === 'remote-job-site' ? 'Remote Job Site' :
               filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="text-center mt-4 text-gray-600 text-sm">
          {isLoading ? (
            'Loading jobs...'
          ) : (
            `Showing ${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''}`
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-8">
        {isLoading ? (
          <div className="text-center py-16 text-gray-600">
            <div className="inline-block w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mb-4"></div>
            <p>Loading job listings...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl text-gray-800 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your filter to see more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
              {column1Jobs.map((job, index) => (
                <JobCard key={`col1-${index}`} job={job} />
              ))}
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
              {column2Jobs.map((job, index) => (
                <JobCard key={`col2-${index}`} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }

        .scrollbar-thumb-gray-900::-webkit-scrollbar-thumb {
          background: #111827;
          border-radius: 3px;
        }

        .scrollbar-thumb-gray-900::-webkit-scrollbar-thumb:hover {
          background: #374151;
        }
      `}</style>
    </div>
  );
}