terraform {
  required_version = "0.13.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.34.0"
    }
    docker = {
      source  = "terraform-providers/docker"
      version = "~> 2.7.2"
    }
  }
  backend "remote" {
    workspaces {
      prefix = "client-"
    }
  }
}

provider "google" {
  project     = var.project_id
  region      = var.region
  credentials = base64decode(var.service_account_key)
}

provider "docker" {
  host = "https://gcr.io"
  registry_auth {
    address  = "gcr.io"
    username = "_json_key"
    password = base64decode(var.service_account_key)
  }
}
