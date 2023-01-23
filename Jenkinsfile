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

	}
}
node {
	stage ('SCM') {
		checkout scm
	}
	stage ('SonarQube analise') {
		def scannerHome = tool 'SonarQubeScanner';
		withSonarQubeEnv () {
			sh "${scannerHome}/bin/sonar-scanner"
		}
	}

}
