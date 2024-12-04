pipeline {
    agent any

    environment {
        // Definir nombres para las imágenes Docker
        DOCKER_IMAGE_1 = 'docker1_image'
        DOCKER_IMAGE_2 = 'docker2_image'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clonar el repositorio desde GitHub
                    git 'https://github.com/CArlosRB122/EntregaFinal.git'
                }
            }
        }

        stage('Construir Docker Contenedor 1') {
            steps {
                script {
                    // Construir la imagen Docker para el contenedor 1 desde el Dockerfile correspondiente
                    sh '''
                    docker build -t $DOCKER_IMAGE_1 -f ./docker1/Dockerfile ./docker1
                    '''
                }
            }
        }

        stage('Construir Docker Contenedor 2') {
            steps {
                script {
                    // Construir la imagen Docker para el contenedor 2 desde el Dockerfile correspondiente
                    sh '''
                    docker build -t $DOCKER_IMAGE_2 -f ./docker2/Dockerfile ./docker2
                    '''
                }
            }
        }

        stage('Iniciar Docker Contenedor 1') {
            steps {
                script {
                    // Iniciar el contenedor 1
                    sh '''
                    docker run -d --name docker1_container $DOCKER_IMAGE_1
                    '''
                }
            }
        }

        stage('Iniciar Docker Contenedor 2') {
            steps {
                script {
                    // Iniciar el contenedor 2
                    sh '''
                    docker run -d --name docker2_container $DOCKER_IMAGE_2
                    '''
                }
            }
        }

        stage('Pruebas en Docker 1') {
            steps {
                script {
                    // Ejecutar las pruebas dentro del contenedor 1
                    sh '''
                    docker exec
