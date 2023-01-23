node {
	stage ('SCM') {
		checkout scm
	}
	stage ('SonarQube Analysis') {
		def scannerHome = tool name: 'SonarQubeScanner';
		withSonarQubeEnv ('oi') {
			sh "${scannerHome}/bin/sonar-scanner"
		}
	}
}
