pipeline {
    agent any

    environment {
        DOCKER_IMAGE_1 = 'docker1_image'
        DOCKER_IMAGE_2 = 'docker2_image'
    }

    stages {
        stage('Construir Contenedores') {
            steps {
                script {
                    // Construcción de la imagen de Docker para docker1
                    sh 'docker build -t ${DOCKER_IMAGE_1} ./docker1'

                    // Construcción de la imagen de Docker para docker2
                    sh 'docker build -t ${DOCKER_IMAGE_2} ./docker2'
                }
            }
        }

        stage('Iniciar Docker1 y Docker2') {
            steps {
                script {
                    // Ejecutar los contenedores Docker (puedes agregar otros parámetros como volúmenes o puertos)
                    sh 'docker run -d --name docker1 ${DOCKER_IMAGE_1}'
                    sh 'docker run -d --name docker2 ${DOCKER_IMAGE_2}'
                }
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Ejecutar pruebas dentro de los contenedores docker1 y docker2
                    sh 'docker exec docker1 run_tests.sh'
                    sh 'docker exec docker2 run_tests.sh'
                }
            }
        }

        stage('Limpiar Docker1 y Docker2') {
            steps {
                script {
                    // Detener y eliminar los contenedores después de las pruebas
                    sh 'docker stop docker1 docker2'
                    sh 'docker rm docker1 docker2'
                }
            }
        }
    }
}

