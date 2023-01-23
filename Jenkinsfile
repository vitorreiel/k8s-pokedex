node {
	stage ('SCM') {
		checkout scm
	}
	stage ('SonarQube Analysis') {
		def scannerHome = tool 'SonarQubeScanner';
		withSonarQubeEnv ('oi') {
			sh "${scannerHome}/bin/sonar-scanner"
		}
	}
}
