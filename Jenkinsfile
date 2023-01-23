node {
	stage ('SCM') {
		checkout scm
	}
	stage ('SonarQube Analysis') {
		def scannerHome = tool 'SonarQubeScanner', type: ‘hudson.plugins.sonar.SonarRunnerInstallation’;
		withSonarQubeEnv ('oi') {
			sh "${scannerHome}/bin/sonar-scanner"
		}
	}
}
