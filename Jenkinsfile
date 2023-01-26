pipeline {
	agent any
	stages {
		stage ('Build Docker Images on Nodejs + Nexus - app'){
			steps {
				sh 'docker compose up --build -d'	
			}
		}
		stage ('Sleep - containers'){
			steps {
				sh 'sleep 10'
			}
		}
		stage ('SonarQube - Connection and Validation'){
			steps {
				script {
					scannerHome = tool 'SonarQubeScanner'
				}
				withSonarQubeEnv ('') {
					sh "${scannerHome}/bin/sonar-scanner"
				}
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
						sh 'docker tag pokedex-app-web:latest ${NEXUS_URL}/pokedex-app-web'
						sh 'docker push ${NEXUS_URL}/pokedex-app-web'
					}
				}
			}
		}
		stage ('Apply Kubernetes files'){
			steps{
				sh '/usr/local/bin/kubectl apply -f ./k3s/node.yaml'
				sh '/usr/local/bin/kubectl apply -f ./k3s/pokedex-app.yaml'
			}
		}
//		stage ('Shutdown dos containers'){
//			steps {
//				sh 'docker compose down'	
//			}
//		}
//		stage ('Quality Gates - SonarQube'){
//			steps {
//				waitForQualityGate abortPipeline: true
//			}
//		}
	}
}
