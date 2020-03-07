# MIA Experiment

Platform for MIA to manage its foreign language learning experiments.

Features:

- Administer multiple experiments concurrently
- Admin UI to create/customize experiments, surveys, data payload, etc
- Analyze experiment data across experiments

## Development Environment Setup

1. `git clone https://github.com/shanrauf/mia-experiment.git`
2. `./scripts/setup_dev.sh` # This simply forces Git to run unit tests before committing code
3. Ensure MySQL local server is running (necessary for development and testing)

## Deploy

Using CodePipeline and CodeDeploy, the code is automatically deployed when you push code to Github.

### Setup an EC2 instance

1. Add `install_dependencies.sh` to root directory of instance
2. `sudo ./install_dependencies.sh` # Installs global dependencies (Nodejs, Nginx, CodeDeploy-Agent, etc)
3. `sudo rm /etc/nginx/sites-available/default`
4. `sudo touch /etc/nginx/sites-available/default`
5. Add contents of local `/scripts/default` to clipboard (frontend static files and /api proxy)
6. Paste content into `sudo nano /etc/nginx/sites-available/default`, then Ctrl + X to save
7. `sudo systemctl restart nginx`
8. Push code to master to deploy

## Todo (in order of priority)

- Complete basic test suite that covers all API routes (testing status codes, response bodies, and model validation)
- Secure API (currently, anyone can make any request from anywhere) via authentication (add auth cases to unit tests)
- Significantly improve frontend styling
- Devise system to send error msgs for frontend to display (e.x backend shud return "survey alreadysubmitted" msg for frontend notif to display)
- Admin dashboard (view status of site; ability to edit experiments/surveys/participants/etc)
- Experiment data analytics/visualization
- Comprehensive test suite
