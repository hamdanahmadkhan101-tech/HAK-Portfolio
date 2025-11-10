import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioAPI } from './services/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [stats, setStats] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all data in parallel
        const [profileData, projectsData, skillsData, statsData, experienceData] = await Promise.all([
          portfolioAPI.getProfile().catch(err => {
            console.error('Error fetching profile:', err);
            return null;
          }),
          portfolioAPI.getProjects().catch(err => {
            console.error('Error fetching projects:', err);
            return [];
          }),
          portfolioAPI.getSkills().catch(err => {
            console.error('Error fetching skills:', err);
            return [];
          }),
          portfolioAPI.getStats().catch(err => {
            console.error('Error fetching stats:', err);
            return [];
          }),
          portfolioAPI.getExperience().catch(err => {
            console.error('Error fetching experience:', err);
            return [];
          }),
        ]);

        setProfile(profileData);
        setProjects(projectsData);
        setSkills(skillsData);
        setStats(statsData);
        setExperience(experienceData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load portfolio data. Please check if the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-card border border-destructive/20 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-destructive mb-2">Error Loading Portfolio</h2>
            <p className="text-destructive/80 mb-4">{error}</p>
            <p className="text-sm text-muted-foreground">
              Make sure the backend server is running at {process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} stats={stats} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default App;

