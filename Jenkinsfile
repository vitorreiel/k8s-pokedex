pipeline {
	agent any
	environment {
		TAG = sh (script: 'git describe --abbrev=0',,returnStdout: true).trim()
	}
	stages {
		stage ('Build Images Docker'){
			steps {
				sh 'docker compose up --build -d'	
			}
		}
		stage ('Containers Up'){
			steps {
				sh 'sleep 10'
			}
		}
		stage ('Connection and Validation - SonarQube'){
			steps {
				script {
					scannerHome = tool 'SonarQubeScanner'
				}
				withSonarQubeEnv ('SonarQube-server') {
					sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=pokedex-app"
				}
				sh 'sleep 10'
			}
		}
		stage ('Quality Gates - SonarQube'){
			steps {
				waitForQualityGate abortPipeline: true
			}
		}
		stage ('Test - app'){
			steps {
				sh 'chmod +x teste-app.sh'
				sh './teste-app.sh'
			}
		}
		stage ('Upload Docker image'){
			steps {
				script {
					withCredentials([usernamePassword(credentialsId: 'nexus-user', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
						sh 'docker login -u $USERNAME -p $PASSWORD ${NEXUS_URL}'
						sh 'docker tag pokedex/app:${TAG} ${NEXUS_URL}/pokedex/app:${TAG}'
						sh 'docker push ${NEXUS_URL}/pokedex/app:${TAG}'
					}
				}
			}
		}
		stage ('Apply Kubernetes files'){
			steps{
				sh "sed -i -e 's#TAG#${TAG}#' ./k8s/pokedex-app.yaml;"
				sh '/usr/local/bin/kubectl apply -f ./k8s/pokedex-app.yaml'
			}
		}
//		stage ('Shutdown dos containers'){
//			steps {
//				sh 'docker compose down'	
//			}
//		}
	}
}
