pipeline {
	agent any
	stages {
		stage ('Build and Up docker compose - app'){
			steps {
				sh 'docker compose up --build -d'	
			}
		}
		stage ('sleep - containers'){
			steps {
				sh 'sleep 10'
			}
		}
		stage ('test - app'){
			steps {
				sh 'chmod +x teste-app.sh'
				sh './teste-app.sh'
			}
		}
		stage ('SonarQube - Connection and Validation'){
			environment {
				def scannerHome = tool 'SonarQubeScanner';
			}
			steps {
				withSonarQubeEnv ('') {
					sh "${scannerHome}/bin/sonar-scanner"
				}
			}
		}
		stage ('Quality Gates - SonarQube'){
			steps {
				waitForQualityGate abortPipeline: true
			}
		}
	}
}
