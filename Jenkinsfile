pipeline {
    agent any

    tools {
                git 'Default'
    }

    environment {
        DOCKER_COMPOSE = 'docker-compose'      }

    stages {
        stage('Checkout') {
            steps {
                               git 'https://github.com/CArlosRB122/EntregaFinal.git'
            }
        }

        stage('Build Docker Containers') {
            steps {
                script {
                                        bat 'docker-compose -f docker-compose.yml up -d'  
                }
            }
        }

        stage('Test Application') {
            steps {
                script {
                                       bat 'docker exec docker1 npm test'                 }
            }
        }

        stage('Test Database Connection') {
            steps {
                script {
                                        bat 'docker exec docker2 npm test'                  }
            }
        }

        stage('Shutdown Containers') {
            steps {
                script {
                                        bat 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
                       script {
                bat 'docker-compose down'
            }
        }
    }
}

