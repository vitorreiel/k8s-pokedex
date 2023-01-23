node {
	stage ('SCM') {
		checkout scm
	}
	stage ('SonarQube Analysis') {
		def scannerHome = tool name: 'sonar_scanner', type: ‘hudson.plugins.sonar.SonarRunnerInstallation’;
		withSonarQubeEnv ('oi') {
			sh "${scannerHome}/bin/sonar-scanner"
		}
	}
}
