pipeline {
	agent any
	stages {
		node {
			stage ('SCM') {
				checkout scm
			}
			stage ('SonarQube Analysis') {
				def scannerHome = tool 'SonarQubeScanner-4';
				withSonarQubeEnv ('oi') {
					sh "${scannerHome}/bin/sonar-scanner"
				}
			}
		}
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

	}
}
