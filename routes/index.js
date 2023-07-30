var express = require('express');
var router = express.Router();

const itemList= [{'ID':1, 'Term':'DevOps', 'Description':'DevOps is a software development and IT operations methodology that emphasizes collaboration, automation, and continuous delivery, aiming to shorten development cycles, increase deployment frequency, and improve overall software quality.', 'References':'GitLab, “DevOps explained,” GitLab, May 23, 2022. https://about.gitlab.com/topics/devops/'},
{'ID':2, 'Term':'Agile', 'Description':'An iterative development approach that promotes collaboration, adaptability, and customer-centricity, delivering value incrementally and fostering continuous improvement in software development and operations.', 'References':'Atlassian, “Agile best practices and tutorials | Atlassian,” Atlassian, 2019. https://www.atlassian.com/agile4'},
{'ID':3, 'Term':'CI/CD (Continuous Integration/Continuous Deployment)', 'Description':'Automates code integration, testing, and deployment, ensuring a streamlined development process with faster feedback loops and more frequent, reliable software releases.', 'References':'"GenRocket.” https://www.genrocket.com/test-data-management-lp1/?gclid=CjwKCAjw8ZKmBhArEiwAspcJ7qkrCaMa1dxRP2trFOwgu5DBpanjgdiIKgZdz6zLbe6V_rC8vnSJchoCp7sQAvD_BwE (accessed Jul. 29, 2023).'},
{'ID':4, 'Term':'Infrastructure as Code (IaC)', 'Description':'Treats infrastructure configurations as software, enabling automated provisioning and management of resources, reducing manual errors, and promoting version control for infrastructure changes.', 'References':'"What is Infrastructure as Code (IaC)?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is'},
{'ID':5, 'Term':'Site Reliability Engineering (SRE)', 'Description':' Blends software engineering and IT operations to maintain highly reliable systems, emphasizing error budgeting, monitoring, and incident response for sustainable and scalable services.', 'References':'Atlassian, “Love DevOps? Wait until you meet SRE,” Atlassian. https://www.atlassian.com/incident-management/devops/sre'},
{'ID':6, 'Term':'Docker', 'Description':'A containerization platform that simplifies application deployment by packaging software and its dependencies into isolated containers, ensuring consistency across various environments.', 'References':'“Docker vs Virtual Machine (VM) – Key Differences You Should Know,” freeCodeCamp.org, Oct. 04, 2022. https://www.freecodecamp.org/news/docker-vs-vm-key-differences-you-should-know/#:~:text=A%20docker%20container%20is%20a (accessed Jul. 30, 2023).'},
{'ID':7, 'Term':'Microservices', 'Description':'Architectural style where an application is divided into small, independent services, enabling flexibility, scalability, and faster development and deployment of individual components.', 'References':'“What are Microservices? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and'},
{'ID':8, 'Term':'Version Control', 'Description':'Systematic management of code changes, facilitating collaboration, tracking history, and enabling rollbacks, vital for effective teamwork in DevOps environments.', 'References':'Atlassian, “What is version control | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as'},
{'ID':9, 'Term':'Jenkins', 'Description':'An open-source automation server used for CI/CD pipelines, automating build, test, and deployment processes, integrating with various tools to support continuous delivery.', 'References':'“What is Jenkins? | Jenkins For Continuous Integration,” Edureka, Nov. 07, 2016. https://www.edureka.co/blog/what-is-jenkins/#:~:text=Jenkins%20is%20an%20open%2Dsource'},
{'ID':10, 'Term':'Monitoring and Alerting', 'Description':'Practices to observe system health and performance, enabling rapid response to issues, minimizing downtime, and ensuring optimal user experiences.', 'References':'[5]sematext, “The Complete Guide to Metrics, Alerting & Monitoring,” Sematext, Jul. 29, 2020. https://sematext.com/blog/monitoring-alerting/'}

]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Glossary', subheading:'my website showing a collection of DevOps term and their brief description.', item:itemList });
});

module.exports = router;
