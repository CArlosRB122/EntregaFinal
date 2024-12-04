pipeline {
    agent any

    environment {
        DOCKER_CLI_EXPERIMENTAL = 'enabled' // Habilitar características experimentales de Docker si es necesario
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Construir las imágenes de Docker para docker1 y docker2
                    bat 'start /B docker build -t docker1 .'
                    bat 'start /B docker build -t docker2 .'
                }
            }
        }

        stage('Run Docker Containers') {
            steps {
                script {
                    // Ejecutar los contenedores en segundo plano
                    bat 'start /B docker run -d --name docker1-container docker1'
                    bat 'start /B docker run -d --name docker2-container docker2'
                }
            }
        }

        stage('Verify Docker Containers') {
            steps {
                script {
                    // Verificar que los contenedores se estén ejecutando correctamente
                    bat 'docker ps -a'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Detener y eliminar los contenedores si es necesario
                    bat 'docker stop docker1-container'
                    bat 'docker stop docker2-container'
                    bat 'docker rm docker1-container'
                    bat 'docker rm docker2-container'
                }
            }
        }
    }

    post {
        always {
            script {
                // Limpiar cualquier imagen de Docker creada si es necesario
                bat 'docker rmi docker1 docker2 || true'
            }
        }
    }
}

