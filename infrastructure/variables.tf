variable "project_id" {
  type        = string
  description = "Google Cloud project id"
}

variable "region" {
  type        = string
  description = "Google Cloud region"
  default     = "us-central1"
}

variable "service_account_key" {
  type        = string
  description = "Google Cloud service account base64 encoded key"
}

variable "service_name" {
  type        = string
  description = "Google Cloud Run service name"
}

variable "image_tag" {
  type        = string
  description = "Google Container Registry image tag"
}

variable "container_environment_variables" {
  type        = map(string)
  description = "Application environment variables"
  default     = {}
}
