import { Job, User, JobLog, DailyLog, STAGES, Priority } from '../types';
import { APP_KEYS } from '../constants';

// --- INITIALIZATION & SEEDING ---

const SEED_USERS: User[] = [
  // New Admins
  { id: 'admin_rajesh', name: 'Rajesh Kumar Soni', username: 'rajesh', password: 'tanisha', role: 'Admin' },
  { id: 'admin_prem', name: 'Prem Ratan Soni', username: 'prem', password: 'tanisha', role: 'Admin' },
  { id: 'admin_sid', name: 'Siddharth Soni', username: 'sid', password: 'tanisha', role: 'Admin' },
  
  // Hand Designing
  { id: 'hd1', name: 'Sameer Hand Designing', username: 'sameer', password: 'password', role: 'Worker', assignedStage: 'Hand Designing' },
  { id: 'hd2', name: 'Sujay Hand Designing', username: 'sujay', password: 'password', role: 'Worker', assignedStage: 'Hand Designing' },
  { id: 'hd3', name: 'Roshan Hand Designing', username: 'roshan', password: 'password', role: 'Worker', assignedStage: 'Hand Designing' },
  { id: 'hd4', name: 'Sagar Hand Designing', username: 'sagar', password: 'password', role: 'Worker', assignedStage: 'Hand Designing' },

  // CAD
  { id: 'cad1', name: 'Atanu CAD', username: 'atanu', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad2', name: 'Aravind CAD', username: 'aravind', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad3', name: 'Aftab CAD', username: 'aftab', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad4', name: 'Sarfaraz CAD', username: 'sarfaraz', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad5', name: 'Subhir CAD', username: 'subhir', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad6', name: 'Preetam CAD', username: 'preetam', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad7', name: 'Surjeet CAD', username: 'surjeet', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad8', name: 'Kushal CAD', username: 'kushal', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad9', name: 'Subha CAD', username: 'subha', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad10', name: 'Pushpender CAD', username: 'pushpender', password: 'password', role: 'Worker', assignedStage: 'CAD' },
  { id: 'cad11', name: 'Bapi CAD', username: 'bapi', password: 'password', role: 'Worker', assignedStage: 'CAD' },

  // Ghat (Filing)
  { id: 'gh1', name: 'Sukumar Ghat', username: 'sukumar', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh2', name: 'Vishwajith Ghat', username: 'vishwajith', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh3', name: 'Rajesh Ghat', username: 'rajesh_ghat', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh4', name: 'Amar Ghat', username: 'amar', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh5', name: 'Nirmal Ghat', username: 'nirmal', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh6', name: 'Manas Ghat', username: 'manas', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },
  { id: 'gh7', name: 'Jayanth Ghat', username: 'jayanth', password: 'password', role: 'Worker', assignedStage: 'Ghat (Filing)' },

  // Polish 1
  { id: 'p1_1', name: 'Alttap Polish 1', username: 'alttap', password: 'password', role: 'Worker', assignedStage: 'Polish 1' },
  { id: 'p1_2', name: 'Tanmay Polish 1', username: 'tanmay', password: 'password', role: 'Worker', assignedStage: 'Polish 1' },

  // Polish 2
  { id: 'p2_1', name: 'Laltoo Polish 2', username: 'laltoo', password: 'password', role: 'Worker', assignedStage: 'Polish 2' },
  { id: 'p2_2', name: 'Somen Polish 2', username: 'somen', password: 'password', role: 'Worker', assignedStage: 'Polish 2' },

  // Setting (Assigned to Diamond Setting)
  { id: 'set1', name: 'Abhijit Setting', username: 'abhijit', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set2', name: 'Amresh Setting', username: 'amresh', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set3', name: 'Assu Setting', username: 'assu', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set4', name: 'Avikdas Setting', username: 'avikdas', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set5', name: 'Biwas Setting', username: 'biwas', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set6', name: 'Shariful Setting', username: 'shariful', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set7', name: 'Orajith Setting', username: 'orajith', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set8', name: 'Shibu Setting', username: 'shibu', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set9', name: 'Somnath Setting', username: 'somnath', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set10', name: 'Subrata Setting', username: 'subrata', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set11', name: 'Vijay Setting', username: 'vijay', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set12', name: 'Suman Setting', username: 'suman', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },
  { id: 'set13', name: 'Ramu Setting', username: 'ramu', password: 'password', role: 'Worker', assignedStage: 'Diamond Setting' },

  // Stringing
  { id: 'str1', name: 'Ambhu Stringing', username: 'ambhu', password: 'password', role: 'Worker', assignedStage: 'Stringing' },
  { id: 'str2', name: 'Jaipal Stringing', username: 'jaipal', password: 'password', role: 'Worker', assignedStage: 'Stringing' },
  { id: 'str3', name: 'Chandher Stringing', username: 'chandher', password: 'password', role: 'Worker', assignedStage: 'Stringing' },
  { id: 'str4', name: 'Dinesh Stringing', username: 'dinesh', password: 'password', role: 'Worker', assignedStage: 'Stringing' },
  { id: 'str5', name: 'Vishnu Stringing', username: 'vishnu', password: 'password', role: 'Worker', assignedStage: 'Stringing' },

  // Kundan Ghat
  { id: 'kg1', name: 'Sujith Kundan', username: 'sujith', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg2', name: 'Jagnath Kundan', username: 'jagnath', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg3', name: 'Srikanth Kundan', username: 'srikanth', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg4', name: 'Harshawardhan Kundan', username: 'harshawardhan', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg5', name: 'Krishna Kundan', username: 'krishna', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg6', name: 'Somnath Kundan', username: 'somnath_kg', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg7', name: 'Jagdish Kundan', username: 'jagdish', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
  { id: 'kg8', name: 'Yadgiree Kundan', username: 'yadgiree', password: 'password', role: 'Worker', assignedStage: 'Kundan Ghat' },
];

// START EMPTY: No sample jobs, so workers see a blank slate initially.
const SEED_JOBS: Job[] = [];

export const initializeData = () => {
  // Check if users exist, if not, seed them
  if (!localStorage.getItem(APP_KEYS.USERS)) {
    localStorage.setItem(APP_KEYS.USERS, JSON.stringify(SEED_USERS));
  }
  // Check if jobs exist, if not, seed them
  if (!localStorage.getItem(APP_KEYS.JOBS)) {
    localStorage.setItem(APP_KEYS.JOBS, JSON.stringify(SEED_JOBS));
  }
};

// --- USER AUTH ---

export const authenticateUser = (username: string, pass: string): User | null => {
  // Always ensure data is initialized before auth
  initializeData();
  
  const users: User[] = JSON.parse(localStorage.getItem(APP_KEYS.USERS) || '[]');
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === pass);
  return user || null;
};

export const getSession = (): User | null => {
  try {
    const stored = localStorage.getItem(APP_KEYS.SESSION);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const setSession = (user: User) => {
  localStorage.setItem(APP_KEYS.SESSION, JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem(APP_KEYS.SESSION);
};

// --- DATA ACCESS ---

export const getJobs = (): Job[] => {
  initializeData();
  return JSON.parse(localStorage.getItem(APP_KEYS.JOBS) || '[]');
};

export const getUsers = (): User[] => {
  initializeData();
  return JSON.parse(localStorage.getItem(APP_KEYS.USERS) || '[]');
};

export const getDailyLogs = (): DailyLog[] => {
  return JSON.parse(localStorage.getItem(APP_KEYS.DAILY) || '[]');
};

// --- MUTATIONS ---

export const createJob = (image: string, priority: Priority) => {
  const jobs = getJobs();
  const newId = `J-${1000 + jobs.length + 1}`;
  const newJob: Job = {
    id: newId,
    designImageUrl: image,
    currentStage: STAGES[0], // Hand Designing
    priority,
    createdAt: new Date().toISOString(),
    history: []
  };
  
  jobs.push(newJob);
  localStorage.setItem(APP_KEYS.JOBS, JSON.stringify(jobs));
  return newJob;
};

export const advanceJob = (jobId: string, proofPhoto: string, worker: User) => {
  const jobs = getJobs();
  const jobIndex = jobs.findIndex(j => j.id === jobId);
  if (jobIndex === -1) return;

  const job = jobs[jobIndex];
  const currentStageIdx = STAGES.indexOf(job.currentStage as any);
  
  // Calculate next stage
  if (currentStageIdx >= STAGES.length - 1) return; // Already done
  const nextStage = STAGES[currentStageIdx + 1];

  // Create Log entry
  const log: JobLog = {
    id: Date.now().toString(),
    jobId: job.id,
    stageName: job.currentStage,
    workerName: worker.name,
    proofPhotoUrl: proofPhoto,
    timestamp: new Date().toISOString()
  };

  // Update Job
  job.currentStage = nextStage;
  job.history.push(log);
  
  // Save
  jobs[jobIndex] = job;
  localStorage.setItem(APP_KEYS.JOBS, JSON.stringify(jobs));
};

export const addDailyLog = (worker: User, type: 'Start' | 'End' | 'StartWork' | 'CompleteWork', photo: string) => {
  const logs = getDailyLogs();
  const newLog: DailyLog = {
    id: Date.now().toString(),
    workerName: worker.name,
    type,
    photoUrl: photo,
    timestamp: new Date().toISOString()
  };
  logs.push(newLog);
  localStorage.setItem(APP_KEYS.DAILY, JSON.stringify(logs));
};

export const addUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(APP_KEYS.USERS, JSON.stringify(users));
};

export const updateUser = (updatedUser: User) => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === updatedUser.id);
  if (index !== -1) {
    // Prevent removing the last admin via update (demotion)
    if (updatedUser.role !== 'Admin') {
       const admins = users.filter(u => u.role === 'Admin');
       const originalUser = users[index];
       if (originalUser.role === 'Admin' && admins.length <= 1) {
         throw new Error("Cannot change the role of the last Administrator.");
       }
    }
    
    users[index] = updatedUser;
    localStorage.setItem(APP_KEYS.USERS, JSON.stringify(users));
  }
};

export const removeUser = (id: string) => {
  let users = getUsers();
  
  // Protect the last remaining admin
  const admins = users.filter(u => u.role === 'Admin');
  const userToDelete = users.find(u => u.id === id);
  
  if (userToDelete?.role === 'Admin' && admins.length <= 1) {
    alert("Cannot delete the last Administrator.");
    return;
  }

  users = users.filter(u => u.id !== id);
  localStorage.setItem(APP_KEYS.USERS, JSON.stringify(users));
};

export const hardReset = () => {
  localStorage.clear();
  window.location.reload();
};

// --- MOCK UPLOAD ---
// In a real app, this would upload to Drive/S3 and return a URL
export const uploadFile = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
};