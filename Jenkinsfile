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
