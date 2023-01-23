pipeline {
	agent any
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
		stage ('SonarQube analises'){
			def scannerHome = tool 'SonarScanner 4.0';
			withSonarQubeEnv('sonarqube-pokedex'){
				sh '${scannerHome}/bin/sonar-scanner'
			}
		}
	}
}
