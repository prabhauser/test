const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: 'https://sonar.techjini.com',
        token: '6112ab455844bf2b808d4b87d0f122a590ba4a4d',
        projectKey: 'leap-react-js', //identifier
        options: {
            'sonar.sources': './',
            'sonar.tests': './',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': '**/**/*.test.tsx,**/**/*.test.ts',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': './test-report.xml'
        }
    },
    () => {}
);
