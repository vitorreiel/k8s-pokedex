pipeline {
	agent any
	environment {
		scannerHome = tool 'SonarQubeScanner'
	}
	stages {
		stage ('subir docker compose - app'){
			steps {
				sh 'docker compose up --build -d'	
			}
		}
		stage ('sleep para dar tempo dos containers ficarem ativos'){
			steps {
				sh 'sleep 10'
			}
		}
		stage ('teste de aplicacao'){
			steps {
				sh 'chmod +x teste-app.sh'
				sh './teste-app.sh'
			}
		}
		stage ('quality'){
			steps {
				withSonarQubeEnv () {
					node "${scannerHome}/bin/sonar-scanner"
				}
			}
		}
	}
}
