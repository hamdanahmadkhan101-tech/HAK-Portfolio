#!/usr/bin/env python3
"""
Portfolio Backend API Test Suite
Tests all backend endpoints for Hamdan Ahmad Khan's portfolio
"""

import requests
import json
import sys
import os
from datetime import datetime

# Backend URL - Update this to your backend URL
# For local development: "http://localhost:8000/api"
# For production: Update with your production URL
BACKEND_URL = os.environ.get("BACKEND_URL", "http://localhost:8000/api")

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, status, details=""):
        """Log test result"""
        result = {
            "test": test_name,
            "status": status,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        if status == "FAIL":
            self.failed_tests.append(result)
            
        print(f"[{status}] {test_name}")
        if details:
            print(f"    Details: {details}")
    
    def test_health_check(self):
        """Test GET /api/ - Health check endpoint"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check required fields
                required_fields = ["message", "version", "developer"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Health Check", "FAIL", f"Missing fields: {missing_fields}")
                    return False
                
                # Check specific values
                if data.get("developer") != "Hamdan Ahmad Khan":
                    self.log_test("Health Check", "FAIL", f"Wrong developer name: {data.get('developer')}")
                    return False
                
                if data.get("version") != "1.0.0":
                    self.log_test("Health Check", "FAIL", f"Wrong version: {data.get('version')}")
                    return False
                
                self.log_test("Health Check", "PASS", f"API running, version: {data.get('version')}")
                return True
            else:
                self.log_test("Health Check", "FAIL", f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Health Check", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_profile_api(self):
        """Test GET /api/profile - Profile information"""
        try:
            response = requests.get(f"{self.base_url}/profile", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check required profile fields
                required_fields = ["name", "email", "phone", "bio", "education", "title"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Profile API", "FAIL", f"Missing fields: {missing_fields}")
                    return False
                
                # Check specific values
                if data.get("name") != "Hamdan Ahmad Khan":
                    self.log_test("Profile API", "FAIL", f"Wrong name: {data.get('name')}")
                    return False
                
                if data.get("email") != "hamdanahmadkhan101@gmail.com":
                    self.log_test("Profile API", "FAIL", f"Wrong email: {data.get('email')}")
                    return False
                
                if data.get("phone") != "03447230306":
                    self.log_test("Profile API", "FAIL", f"Wrong phone: {data.get('phone')}")
                    return False
                
                # Check education
                education = data.get("education", {})
                if education.get("institution") != "University of Swat":
                    self.log_test("Profile API", "FAIL", f"Wrong institution: {education.get('institution')}")
                    return False
                
                if education.get("start_year") != 2022:
                    self.log_test("Profile API", "FAIL", f"Wrong start year: {education.get('start_year')}")
                    return False
                
                self.log_test("Profile API", "PASS", "All profile data correct")
                return True
            else:
                self.log_test("Profile API", "FAIL", f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Profile API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_projects_api(self):
        """Test GET /api/projects - All projects and featured filter"""
        try:
            # Test all projects
            response = requests.get(f"{self.base_url}/projects", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Projects API - All", "FAIL", f"Status code: {response.status_code}")
                return False
            
            all_projects = response.json()
            
            if len(all_projects) != 4:
                self.log_test("Projects API - All", "FAIL", f"Expected 4 projects, got {len(all_projects)}")
                return False
            
            # Check for KFT project
            kft_project = next((p for p in all_projects if "Khan Familia Travels" in p.get("title", "")), None)
            if not kft_project:
                self.log_test("Projects API - All", "FAIL", "KFT Travel Platform not found")
                return False
            
            self.log_test("Projects API - All", "PASS", f"Found {len(all_projects)} projects including KFT")
            
            # Test featured projects filter
            response = requests.get(f"{self.base_url}/projects?featured=true", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Projects API - Featured", "FAIL", f"Status code: {response.status_code}")
                return False
            
            featured_projects = response.json()
            
            # Check that KFT, Task Manager, and Todo Next.js are featured
            featured_titles = [p.get("title", "") for p in featured_projects]
            expected_featured = ["Khan Familia Travels Platform", "Task Manager Application", "Todo App with Next.js"]
            
            missing_featured = []
            for expected in expected_featured:
                if not any(expected in title for title in featured_titles):
                    missing_featured.append(expected)
            
            if missing_featured:
                self.log_test("Projects API - Featured", "FAIL", f"Missing featured projects: {missing_featured}")
                return False
            
            self.log_test("Projects API - Featured", "PASS", f"Found {len(featured_projects)} featured projects")
            return True
            
        except Exception as e:
            self.log_test("Projects API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_skills_api(self):
        """Test GET /api/skills - Skills categorized"""
        try:
            response = requests.get(f"{self.base_url}/skills", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_test("Skills API", "FAIL", "Response is not a list")
                    return False
                
                # Check for required categories
                categories = [item.get("category") for item in data]
                expected_categories = ["Frontend", "Backend", "Tools & Others"]
                
                missing_categories = [cat for cat in expected_categories if cat not in categories]
                if missing_categories:
                    self.log_test("Skills API", "FAIL", f"Missing categories: {missing_categories}")
                    return False
                
                # Check that each category has skills
                for item in data:
                    if not item.get("skills") or len(item.get("skills", [])) == 0:
                        self.log_test("Skills API", "FAIL", f"Category {item.get('category')} has no skills")
                        return False
                
                self.log_test("Skills API", "PASS", f"Found {len(data)} skill categories")
                return True
            else:
                self.log_test("Skills API", "FAIL", f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Skills API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_stats_api(self):
        """Test GET /api/stats - Portfolio statistics"""
        try:
            response = requests.get(f"{self.base_url}/stats", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if len(data) != 4:
                    self.log_test("Stats API", "FAIL", f"Expected 4 stats, got {len(data)}")
                    return False
                
                # Check for required stat labels
                labels = [stat.get("label") for stat in data]
                expected_labels = ["Projects", "Contributions", "Experience", "Technologies"]
                
                # Check if any expected label is contained in the actual labels
                missing_labels = []
                for expected in expected_labels:
                    if not any(expected in label for label in labels):
                        missing_labels.append(expected)
                
                if missing_labels:
                    self.log_test("Stats API", "FAIL", f"Missing stat types: {missing_labels}")
                    return False
                
                self.log_test("Stats API", "PASS", f"Found {len(data)} stats")
                return True
            else:
                self.log_test("Stats API", "FAIL", f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Stats API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_experience_api(self):
        """Test GET /api/experience - Work experience"""
        try:
            response = requests.get(f"{self.base_url}/experience", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if len(data) != 2:
                    self.log_test("Experience API", "FAIL", f"Expected 2 experiences, got {len(data)}")
                    return False
                
                # Check for KFT Developer and CS Student
                titles = [exp.get("title", "") for exp in data]
                
                kft_found = any("KFT" in title or "Khan Familia" in title for title in titles)
                cs_found = any("CS Student" in title or "Computer Science" in title for title in titles)
                
                if not kft_found:
                    self.log_test("Experience API", "FAIL", "KFT Developer experience not found")
                    return False
                
                if not cs_found:
                    self.log_test("Experience API", "FAIL", "CS Student experience not found")
                    return False
                
                self.log_test("Experience API", "PASS", "Found KFT Developer and CS Student experiences")
                return True
            else:
                self.log_test("Experience API", "FAIL", f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Experience API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def test_contact_form_api(self):
        """Test POST /api/contact - Contact form submission"""
        try:
            # Test data
            test_data = {
                "name": "Ahmad Hassan",
                "email": "ahmad.hassan@example.com",
                "subject": "Portfolio Inquiry",
                "message": "Hello Hamdan, I'm interested in discussing a potential project collaboration. Your work on the KFT Travel Platform looks impressive!"
            }
            
            response = requests.post(
                f"{self.base_url}/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                
                # Check that response contains the submitted data
                required_fields = ["name", "email", "subject", "message", "id"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Contact Form API", "FAIL", f"Missing response fields: {missing_fields}")
                    return False
                
                # Check that data matches what was submitted
                if data.get("name") != test_data["name"]:
                    self.log_test("Contact Form API", "FAIL", "Name mismatch in response")
                    return False
                
                if data.get("email") != test_data["email"]:
                    self.log_test("Contact Form API", "FAIL", "Email mismatch in response")
                    return False
                
                # Check that message has an ID (indicating it was saved)
                if not data.get("id"):
                    self.log_test("Contact Form API", "FAIL", "No message ID returned")
                    return False
                
                self.log_test("Contact Form API", "PASS", f"Message saved with ID: {data.get('id')}")
                return True
            else:
                self.log_test("Contact Form API", "FAIL", f"Status code: {response.status_code}, Response: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Contact Form API", "FAIL", f"Exception: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"Starting Portfolio Backend API Tests")
        print(f"Backend URL: {self.base_url}")
        print("=" * 60)
        
        tests = [
            self.test_health_check,
            self.test_profile_api,
            self.test_projects_api,
            self.test_skills_api,
            self.test_stats_api,
            self.test_experience_api,
            self.test_contact_form_api
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            if test():
                passed += 1
        
        print("=" * 60)
        print(f"Test Results: {passed}/{total} tests passed")
        
        if self.failed_tests:
            print("\nFailed Tests:")
            for failed in self.failed_tests:
                print(f"  - {failed['test']}: {failed['details']}")
        
        return passed == total

if __name__ == "__main__":
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n✅ All tests passed!")
        sys.exit(0)
    else:
        print("\n❌ Some tests failed!")
        sys.exit(1)