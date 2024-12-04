pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'trabajo-final'
        CONTAINER_NAME_1 = 'docker1' // Ajusta con el nombre real de tu contenedor
        CONTAINER_NAME_2 = 'docker2' // Ajusta con el nombre real de tu contenedor
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio especificando la rama correcta
                git branch: 'main', url: 'https://github.com/CArlosRB122/TrabajoFinal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Asegúrate de tener docker-compose.yml correctamente configurado
                    // Inicia los contenedores en modo desatendido (-d)
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Verify Docker Connection') {
            steps {
                script {
                    // Verifica la conexión entre los contenedores docker1 y docker2
                    sh 'docker exec ${CONTAINER_NAME_1} ping -c 4 ${CONTAINER_NAME_2}'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Ejecuta las pruebas dentro del contenedor docker1
                    // Asegúrate de que en el contenedor esté disponible el comando npm test
                    sh 'docker exec ${CONTAINER_NAME_1} npm test'
                }
            }
        }

        stage('Shutdown Containers') {
            steps {
                script {
                    // Detén los contenedores al final del pipeline
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            // Limpiar los contenedores al finalizar
            sh 'docker system prune -f'
        }
        success {
            // Enviar notificación o cualquier otra acción cuando el pipeline sea exitoso
            echo 'Pipeline executed successfully'
        }
        failure {
            // Enviar notificación o cualquier otra acción cuando el pipeline falle
            echo 'Pipeline execution failed'
        }
    }
}

