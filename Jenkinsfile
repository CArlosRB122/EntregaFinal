pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde GitHub
                git 'https://github.com/CArlosRB122/TrabajoFinal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Ejecuta el docker-compose en segundo plano
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Ejecuta las pruebas en el contenedor (asegúrate de que el contenedor está levantado y accesible)
                    bat 'docker exec docker1 npm test'
                }
            }
        }

        stage('Shutdown Containers') {
            steps {
                script {
                    // Detiene y elimina los contenedores al final
                    bat 'docker-compose down'
                }
            }
        }
    }
}
