# Deployment

This repository is set up to deploy to [Google Cloud Run](https://cloud.google.com/run). It uses an immutable CI/CD flow
via GitHub Actions. Deploying the app is as simple as making a pull request and merging it. That being said, there
are still some pre-requisites to fulfill before running your first deployment. Please follow the steps below in order.

#### Requirements:

- [Google Cloud Console Account](https://console.cloud.google.com)
- [Terraform Cloud Account](https://app.terraform.io/signup/account)
- [GitHub Account](https://github.com/join)

---

#### Google Cloud Console

1. [Create a new Project Name and ID](https://console.cloud.google.com/projectcreate).

2. [Enable the Google Container Registry API](https://console.cloud.google.com/apis/library/containerregistry.googleapis.com).

3. [Enable the Google Cloud Run API](https://console.developers.google.com/apis/library/run.googleapis.com).

4. [Create a new Service Account with the following roles](https://console.cloud.google.com/iam-admin/serviceaccounts/create):

   - Service Account User
   - Cloud Run Admin
   - Storage Admin

   (Skip step 3 and click _"DONE"_)

5. You should now see your newly created Service Account in the table. Click on it, then click the _"ADD KEY"_
   dropdown, and create a new JSON key.

6. Base64 encode the key that was just downloaded to your computer: `cat key.json | base64`.

7. Copy the encoded string and keep it handy for a later step. **DO NOT** show this to anyone or check this into source
   control.

---

#### Terraform Cloud

1. [Create an API token](https://app.terraform.io/app/settings/tokens). Copy this for a later step. **DO NOT** show
   this to anyone or check this into source control.

2. [Create a new Organization](https://app.terraform.io/app/organizations/new). Or use an existing organization if you
   have a separate backend already set up.

3. Create 3 workspaces for the organization - one for each environment (development, staging, production).

   Use the settings below when creating each workspace:

   - Choose Type: _"CLI-driven workflow"_
   - Configure settings:
     - Workspace Name: `<client-development|client-staging|client-production>`

4. For each workspace, select _Settings / General_, and set the Terraform version to `0.13.0` and click _"Save settings"_.

5. For each workspace, select _Variables_, and add the following variables under _Terraform Variables_:

   ```
   # ☐ HCL ☐ Sensitive
   project_id = <project_id>

   # ☐ HCL ✅ Sensitive
   service_account_key = <service_account_key>

   # ☐ HCL ☐ Sensitive
   service_name = <client-development|client-staging|client-production>

   # ☐ HCL ☐ Sensitive
   image_tag = <development|staging|production>
   
   # ✅ HCL ✅ Sensitive
   # These are your application environment variables. Check the .env.example file for reference.
   # Note: It's a good practice to use different values for each environment.
   container_environment_variables = {
     "KEY_1" = "VALUE"
     "KEY_2" = "VALUE"
     "KEY_3" = "VALUE"
   }
   ```

---

#### GitHub

1. Navigate to your GitHub repository and create the following branches:

   - `production` (default)
   - `staging`
   - `development`

2. Select _Settings / Secrets_. Create the following secrets:

   ```
   TERRAFORM_CLOUD_API_TOKEN = <token>
   TERRAFORM_CLOUD_ORGANIZATION = <organization>
   SERVICE_ACCOUNT_KEY = <service_account_key>
   PROJECT_ID = <project_id>
   ```

3. Create a new feature branch, write some code, push it, and make a pull request to `development`. Merging
   this will trigger a build and deploy. The URL of your deployed application can be found in the GitHub Action logs.
   Once you are satisfied with the state of your application in the development environment, you can continue the
   [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) process via making another
   pull request from `development -> staging`. And again, once you are satisfied with the application state in the
   staging environment, make another pull request from `staging -> production`.

   **Please note**: [Terraform plan](https://www.terraform.io/docs/commands/plan.html) will fail for your first
   pull request to `development`, `staging`, and `production`. This is because Terraform is looking for an image to use
   for the plan. This image doesn't get built and pushed until merge. That being said, it is still fine to merge your
   PR in this state. The application will still deploy on merge since the image gets created and pushed right before
   [Terraform apply](https://www.terraform.io/docs/commands/apply.html). Subsequent pull requests to these branches
   will now have an image tag to reference, and therefore will not experience this edge case.
