pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }
// import node for all stages 
    environment {
        NODE_ENV = 'test'
    }

    stages {
        //get the  code from github
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
// install node packages and drivers playwright 
        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Test') {
    steps {
        sh 'npx playwright test --project=chromium'
    }
}

// store the report in the jenkins file 
        stage('Publish Report') {
            steps {
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }
        }
    }

    post {
        //sexeute toujours que ce soit pipeline failed or succeeded 
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
            echo 'Pipeline finished'
        }
        failure {
            echo 'Tests failed'
        }
    }
}