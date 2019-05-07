# APITesting-Newman
API Testing with Newman Jenkins

Newman-Jenkins API Testing framework with CI Integration .

Prerequisite : 
Newman Docker image 
Jenkinsfile on Bitbucket project

Bitbucket folder structure 
	

Package.json sample :
{
  "name": "reciproci_api_test",
  "version": "1.0.0",
  "description": "Api Test Integration with Jenkins",
  "main": "index.js",
  "directories": {
    "test": "tests"
  },
  "scripts": {
    "test": "node tests/run-collections-in-directory.js"
  },
  "repository": {
    "type": "git",
    "url": "https://user1@bitbucket.yourcompany.com/scm/~user1/APITesting-Newman
.git"
  },
  "author": "Techtree",
  "dependencies": {
    "async": "^2.6.1",
    "newman": "^4.3.1",
    "node": "^11.9.0"
  }
}


Package json can be created with command “ npm init “




Tests folder will have all testing collection API and data file .

Jenkinsfile 
#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run test'
            }
        }
    }
}


-----------

STEP 1 : Create New Item with Pipeline project from Jenkins.
STEP 2 : Configure Bitbucket Repo and Jenkinsfile path on Pipeline Tab
STEP 3 : Run Build Now and check for results .	
