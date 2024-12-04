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
                    bat 'start /B docker run -d --name docker1 docker1'
                    bat 'start /B docker run -d --name docker2 docker2'
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
            // Verificar si los contenedores están en ejecución antes de intentar detenerlos
            def container1Running = sh(script: 'docker ps -q -f name=docker1', returnStdout: true).trim()
            def container2Running = sh(script: 'docker ps -q -f name=docker2', returnStdout: true).trim()

            // Detener los contenedores si están en ejecución
            if (container1Running) {
                bat 'docker stop docker1'
                bat 'docker rm docker1'
            }
            if (container2Running) {
                bat 'docker stop docker2'
                bat 'docker rm docker2'
            }
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

