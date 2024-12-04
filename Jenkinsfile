pipeline {
    agent any

    stages {
        stage('Detener contenedores existentes') {
            steps {
                script {
                    // Detener los contenedores si están corriendo, sin causar error si no existen
                    bat 'docker stop docker1 docker2 || exit /b 0'
                    // Eliminar los contenedores detenidos, sin causar error si no existen
                    bat 'docker rm docker1 docker2 || exit /b 0'
                }
            }
        }
        
        stage('Construir contenedores Docker') {
            steps {
                script {
                    // Construir los contenedores docker1 y docker2
                    bat 'docker build -t docker1 ./docker1'
                    bat 'docker build -t docker2 ./docker2'
                }
            }
        }

        stage('Iniciar contenedores') {
            steps {
                script {
                    // Iniciar los contenedores docker1 y docker2
                    bat 'docker run -d --name docker1 docker1'
                    bat 'docker run -d --name docker2 docker2'
                }
            }
        }

        stage('Verificar contenedores en ejecución') {
            steps {
                script {
                    // Verificar que los contenedores están en ejecución
                    bat 'docker ps'
                }
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                script {
                    // Aquí puedes incluir cualquier comando para ejecutar pruebas en los contenedores
                    echo 'Ejecutando pruebas...'
                }
            }
        }

        stage('Limpiar contenedores') {
            steps {
                script {
                    // Detener y eliminar contenedores después de la ejecución
                    bat 'docker stop docker1 docker2 || exit /b 0'
                    bat 'docker rm docker1 docker2 || exit /b 0'
                }
            }
        }
    }
}
