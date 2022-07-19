pipeline {
    agent any
    
    tools {
        nodejs "node"
    }
    stages {
        
        stage('Git') {
      steps {
        git 'https://github.com/prashantsagar73/devops-task'
        }
     }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat '\scripts\test.sh'
            }
        }
        
        }
    
}