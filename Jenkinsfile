pipeline {
    agent any
    
    tools {
        nodejs "node"
    }
    stages {
        
        stage('pre-req') {
            steps {
                bat 'npm install'
            }
        }
        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        } 
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Build'){
        steps{
            bat 'npm run build'
        }
        }
        
        }
      post {    
    always {
      emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}", 
               recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], 
               subject:  "jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
               attachLog: true
      }
    }
}