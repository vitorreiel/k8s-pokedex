pipeline {
	agent any
	environment {
		TAG = sh (script: 'git describe --abbrev=0',,returnStdout: true).trim()
	}
	stages {
		stage('Executar Pipeline Secundária') {
		    steps {
			script {
			    def result = build(job: 'employees', propagate: false)
			    if (result == 'SUCCESS') {
				echo 'Pipeline Secundária concluída com sucesso.'
			    } else {
				currentBuild.result = 'ABORTED'
				error('A Pipeline Secundária falhou. A Pipeline Principal foi interrompida.')
			    }
			}
		    }
		}
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
//		stage ('Connection and Validation - SonarQube'){
//			steps {
//				script {
//					scannerHome = tool 'SonarQubeScanner'
//				}
//				withSonarQubeEnv ('SonarQube-server') {
//					sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=pokedex-app"
//				}
//				sh 'sleep 10'
//			}
//		}
//		stage ('Quality Gates - SonarQube'){
//			steps {
//				waitForQualityGate abortPipeline: true
//			}
//		}
//		stage ('Test - app'){
//			steps {
//				sh 'chmod +x teste-app.sh'
//				sh './teste-app.sh'
//			}
//		}
//		stage ('Shutdown dos containers'){
//			steps {
//				sh 'docker compose down'	
//			}
//		}
	}
}
