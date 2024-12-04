pipeline {
    agent any

    environment {

        GIT_EXECUTABLE = 'C:\\Program Files\\Git\\bin\\git.exe'
    }



    stages {
        stage('Checkout') {
            steps {
                script {
                    // Realiza el checkout del repositorio
                    git branch: 'master', url: 'https://github.com/CArlosRB122/EntregaFinal.git'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker utilizando docker-compose
                    echo 'Building Docker image using docker-compose...'
                    sh 'docker-compose -f docker-compose.yml build'
                }
            }
        }

        stage('Run Docker Containers') {
            steps {
                script {
                    // Iniciar los contenedores Docker con docker-compose
                    echo 'Starting Docker containers...'
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Ejecutar las pruebas dentro del contenedor (puedes adaptar esto según tus necesidades)
                    echo 'Running tests inside Docker containers...'
                    // Por ejemplo, ejecutar las pruebas en el contenedor
                    sh 'docker exec <container_name> <test_command>'
                }
            }
        }

        stage('Stop Docker Containers') {
            steps {
                script {
                    // Detener los contenedores después de las pruebas
                    echo 'Stopping Docker containers...'
                    sh 'docker-compose -f docker-compose.yml down'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'There was a failure in the pipeline.'
        }
    }
}
